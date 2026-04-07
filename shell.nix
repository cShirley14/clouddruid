{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  name = "astro-dev-shell-env";
  nativeBuildInputs = with pkgs; [
    nodejs
    pnpm
    pagefind
  ];
}
