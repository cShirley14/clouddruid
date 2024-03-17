{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  name = "astro-dev-shell-env";
  nativeBuildInputs = with pkgs; [
    nodePackages.pnpm
    pagefind
  ];
}
