#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_FILE="$ROOT_DIR/byd-3d-card.js"
DIST_MAIN="$ROOT_DIR/dist/byd-3d-card.js"
DIST_HACS="$ROOT_DIR/dist/byd-3d-card-hacs.js"

cp "$SRC_FILE" "$DIST_MAIN"
cp "$SRC_FILE" "$DIST_HACS"

node --check "$SRC_FILE"
node --check "$DIST_MAIN"
node --check "$DIST_HACS"

cmp -s "$SRC_FILE" "$DIST_MAIN"
cmp -s "$SRC_FILE" "$DIST_HACS"

echo "Sync complete: source and dist JS files are identical."
