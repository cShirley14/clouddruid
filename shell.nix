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
    echo "  pnpm dev       - start dev server"
    echo "  pnpm build     - build for production"
    echo "  pnpm preview   - preview production build"
    echo "  pnpm format    - format code"
    echo "  pnpm check     - type check"
    echo ""
    echo "  See package.json for all scripts"
    echo ""
  '';
}
