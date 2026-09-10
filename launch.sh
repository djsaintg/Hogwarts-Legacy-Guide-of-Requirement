#!/usr/bin/env bash
# Guide of Requirement — offline launcher
set -euo pipefail
DIST="dist/index.html"; PORT=4173
say()  { printf '%s\n' "$*"; }
die()  { printf 'error: %s\n' "$*" >&2; exit 1; }
usage(){ cat <<EOF
Guide of Requirement — launcher
  ./launch.sh            Build if needed, then open the guide
  ./launch.sh --serve    Serve at http://localhost:$PORT and open
  ./launch.sh --rebuild  Force a fresh build before opening
  ./launch.sh --help     This message
EOF
}
open_url(){ xdg-open "$1" 2>/dev/null || open "$1" 2>/dev/null || say "Open $1 in your browser."; }
command -v node >/dev/null 2>&1 || die "Node.js not found — install Node 18+."
[[ -f package.json ]] || die "No package.json — run from the project root."
install_if_needed(){ [[ -d node_modules ]] || { say "Installing dependencies (first run)…"; npm install; }; }
build(){ install_if_needed; say "Building single-file guide…"; npm run build; }
dist_is_fresh(){ [[ -f $DIST && -z $(find src index.html -newer "$DIST" 2>/dev/null) ]]; }
case "${1:-}" in
  -h|--help) usage ;;
  --serve)   dist_is_fresh || build
             ( sleep 1; open_url "http://localhost:$PORT" ) &
             npx vite preview --port "$PORT" --strictPort ;;
  --rebuild) build; open_url "$DIST" ;;
  "")        dist_is_fresh || build; open_url "$DIST" ;;
  *)         usage; die "unknown option: $1" ;;
esac
