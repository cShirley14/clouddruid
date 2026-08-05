{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  name = "astro-dev-shell-env";
  nativeBuildInputs = with pkgs; [
    nodejs
    pnpm
    pagefind
  ];

  shellHook = ''
    echo ""
    echo "☁️  clouddruid dev environment"
    echo ""

    ${pkgs.jq}/bin/jq -r '.scripts | to_entries[] | "  pnpm \(.key)\t\(.value)"' package.json | ${pkgs.util-linux}/bin/column -t -s $'\t'

    echo ""
  '';
}
