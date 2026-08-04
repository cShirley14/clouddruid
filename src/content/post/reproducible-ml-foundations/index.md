---
title: "Reproducible ML Environment with Nix and uv"
description: "Using Nix flakes, uv, and direnv to build a reproducible Python ML development environment from scratch."
publishDate: "01 Aug 2026"
tags: ["Python", "Nix", "NixOS", "ML", "uv", "flakes", "direnv"]
draft: false
coverImage:
  src: "./python.jpg"
  alt: "Image by Michael Schwarzenberger from Pixabay"
---

## The challenge

I have been working through an ML engineering challenge and the first task was
straightforward: set up a Python environment with numpy, pandas, scikit-learn,
and matplotlib. I could have reached for `pip install` and a `requirements.txt`
like the task suggests. But tutorials that skip production-readiness habits have
always been a thorn for me. I wanted something I could come back to in six
months and trust.

For me that means pinning everything: the system toolchain with
[Nix flakes](https://wiki.nixos.org/wiki/Flakes), the Python packages with
[uv](https://docs.astral.sh/uv/). Nix flakes lock down the system layer (think
`package.json` but for compilers, shared libraries, even which version of uv
you are running). uv then locks down Python packages with hashes.

If you haven't heard of uv yet: it is from [Astral](https://astral.sh/), has
[85k+ GitHub stars](https://github.com/astral-sh/uv), and OpenAI
[acquired the team](https://openai.com/index/openai-to-acquire-astral/) earlier
this year. Still [fully open source](https://astral.sh/blog/openai). Let's hope
their AI doesn't hallucinate uv into oblivion.

## Why uv instead of pip

So why not just use pip? Nothing wrong with pip for installing packages. The
challenge is reproducibility: making sure someone else (or future-you) gets the
exact same environment. pip had no lockfile until
[PEP 751](https://peps.python.org/pep-0751/) arrived in 2025, and its
[support is still experimental and catching up](https://pip.pypa.io/en/stable/news/#id62).
uv handles this out of the box: `uv lock` gives you a cross-platform lockfile
with hashes, and it is [fast](https://docs.astral.sh/uv/reference/benchmarks/).

Once I started using it, a few things clicked. You don't have to manually sync
your environment because `uv run` handles that before running anything. The
lockfile is intended to be consistent across platforms, assuming compatible
architectures. There is also opt-in
[malware scanning against OSV](https://docs.astral.sh/uv/concepts/projects/sync/#malware-checks),
which is a nice extra for supply chain peace of mind.

## What's in the box

This is all foundation work before the ML challenge itself. Not many files for
a fresh project, but each one has a clear role:

| File | What it does |
|------|--------------|
| `flake.nix` | Provides uv, just, and system libraries via Nix |
| `flake.lock` | Pins the nixpkgs commit |
| `pyproject.toml` | Lists project dependencies per [PEP 621](https://peps.python.org/pep-0621/) |
| `uv.lock` | Pins exact versions with hashes |
| `.envrc` | Auto-activates the environment on `cd` |
| `justfile` | Wraps common workflows into short commands |

## Pinning the toolchain

Here is the `flake.nix`. If you are on NixOS, the NIX_LD section is the
important part. I followed
[this guide](https://pydevtools.com/handbook/how-to/how-to-use-uv-on-nixos/) for
getting prebuilt Python wheels working. The shellHook handles the venv on first
entry:

```nix
{
    description = "Reproducible ML Foundations";

    inputs = {
      nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
      flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils }:
      flake-utils.lib.eachDefaultSystem(system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in {
          devShells.default = pkgs.mkShell {
          packages = [ pkgs.uv pkgs.just ];

          # NixOS doesn't follow FHS, so prebuilt Python wheels can't find
          # shared libraries at their expected paths. nix-ld bridges this gap.
          # Reference: https://pydevtools.com/handbook/how-to/how-to-use-uv-on-nixos/
          env.NIX_LD = pkgs.stdenv.cc.bintools.dynamicLinker;
          env.NIX_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
            pkgs.stdenv.cc.cc.lib  # C++ support (numpy, pandas, sklearn use it)
            pkgs.zlib              # compression (matplotlib, pip)
            pkgs.openssl           # so uv can download packages over HTTPS
            pkgs.libffi            # Python needs this for calling C code
            pkgs.glibc             # base C library everything depends on
          ];

          shellHook = ''
            # Use a named venv directory instead of the default .venv
            export UV_PROJECT_ENVIRONMENT=ml-ops
            if [ ! -d ml-ops ]; then
              uv sync
              echo "Dependencies installed from uv.lock"
            fi
            source ml-ops/bin/activate
          '';
        };
    });
}
```

## cd and go

This is `.envrc`, the file [direnv](https://direnv.net/) looks for:

```bash
use flake
```

One line. `cd` in and the environment loads. `cd` out and it unloads.

## What I need installed

```toml
[project]
name = "reproducible-ml-foundations"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = [
    "numpy",
    "pandas",
    "scikit-learn",
    "matplotlib",
]
```

Pretty short list. This is the standard
[pyproject.toml format](https://peps.python.org/pep-0621/), and `uv lock` turns
it into a full lockfile with pinned versions and hashes for every download.

## Keeping it fresh

I did not want to remember the exact flags for upgrading, auditing, and rolling
back. [just](https://github.com/casey/just) solves this. It is a command runner
that is common in the Nix community
([home-manager](https://github.com/nix-community/home-manager) uses it, the
[NixOS & Flakes Book](https://nixos-and-flakes.thiscute.world/best-practices/simplify-nixos-related-commands)
recommends it), and `just --list` makes every workflow discoverable. Here are
the commands I set up for this project:

```bash
just --list           # see available commands
just status           # what is installed
just preview          # what upgrades are available (read-only)
just apply-deps       # upgrade Python dependencies
just apply-nix        # upgrade Nix toolchain
just audit            # check for known vulnerabilities via pip-audit
just rollback         # revert to last committed state
```

The `audit` recipe runs
[pip-audit](https://github.com/pypa/pip-audit) against the
[OSV](https://osv.dev/) vulnerability database. Is it overkill for a learning
project? Maybe. But I would rather build the habit now than bolt it on later.

## The payoff

```bash
~/repos/reproducible-ml-foundations via 🐍 v3.14.6 (ml-ops) via ❄️  impure (nix-shell-env)
❯ python -c "import numpy, pandas, sklearn, matplotlib; print('ready')"
ready
```

And that is it. The foundations are in place. Adding a new dependency is usually
as simple as `uv add <package>` followed by `uv sync`. Something like PyTorch
might need extra flags for CUDA or platform-specific wheels, but the
lockfile-driven approach stays the same regardless. If you are building
something similar, I hope this helps you skip some of the rabbit holes I went
down. Happy hacking! 😊
