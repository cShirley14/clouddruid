---
title: "Using Nix to Develop in Python"
description: "My search for a Nix-ish solution that could wrangle Python's virtualenv automagically."
publishDate: "19 Mar 2024"
tags: ["Python", "Nix", "NixOS", "venv", "virtualenv", "bash", "virtual environments"]
draft: false
coverImage:
  src: "./python.jpg"
  alt: "Image by Michael Schwarzenberger from Pixabay"
updatedDate: "22 Mar 2024"
---

## Python and virtualenv

Initially, working with Python and virtualenv in NixOS was not an intuitive
endeavor. Admittedly, it would be remiss of me to not acknowledge NixOS + (your
tool of choice) in any sentence can send you down a rabbit hole of "fun" and
interesting challenges... &#x1F602; What began as me setting out to automate my
development environment with appropriate Python-esque packaging and versioning,
evolved into a search for a Nix-ish solution that could do the trick
automagically. This led to a journey of discoveries aided by Nix Discourse,
NixOS wiki documentation, and StackOverflow suggestions.

Eventually, after extensive sifting through commentary and cursory read-throughs,
I was able to craft together an approach. This led to what felt like a rather
elegant and powerful solution. The result of my efforts enabled me to open a
terminal in my dev environment, with everything loaded without any prompting
whatsoever! If you are familiar with NixOS, then you are probably well
acquainted with the functionality I am alluding to.

## The Aproach

`nix-shell` in combination with `nix-direnv` allows for seamless loading of
pre-configured shell environments without any needed clicks, manual running of
local scripts, or one-off bash commands. Below I have included example code from
my [StackOverflow post](https://stackoverflow.com/questions/64598792/writing-one-shell-script-to-first-enter-nix-shell-then-enter-the-python-virtual/78071283#78071283).

### nix-direnv Magic

For this flow, in the root directory of your project you will want the following
file to enable nix-direnv:

```bash title=".envrc"
if ! has nix_direnv_version || ! nix_direnv_version 3.0.4; then
  source_url "https://raw.githubusercontent.com/nix-community/nix-direnv/3.0.4/direnvrc" "sha256-DzlYZ33mWF/Gs8DDeyjr8mnVmQGx7ASYqA5WlxwvBG4="
fi
use_nix
```

### Shell Configurations

Next define whatever configurations you need in a `shell.nix` file, for
`nix-direnv` to load, like in the file below:

```nix title="shell.nix"
{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  # nativeBuildInputs is usually what you want -- tools you need to run
  nativeBuildInputs = with pkgs.buildPackages; [
    python39Full
    python39Packages.virtualenv
  ];
  shellHook = ''
    virtualenv --python="${pkgs.python39Full}/bin/python" ./venv
    source ./venv/bin/activate
  '';
}
```

### The Result

Finally, if you are using Nix and have the pre-requisite dependencies, when you
open a terminal, vscode, etc, it should look something like the following:

```bash
~/test-py via 🐍 v3.9.18 (venv) via ❄️  impure (nix-shell-env) took 1m30s
❯

~/test-py via 🐍 v3.9.18 (venv) via ❄️  impure (nix-shell-env)
❯ ls -a
.  ..  .direnv  .envrc  shell.nix  venv
```

With code similar to the example above, I was able to quickly iterate from this
point, adding needed packages and developing in Python with relative ease. Which
ultimately allowed me to finish an MVP. While I am still learning a great deal
when it comes to NixOS, working out the nuances was well worth the gains in
efficiency and reproducibility of local shell environments.
