#!/usr/bin/env bash
set -euo pipefail

HOME_DIR="${HOME:-/home/vscode}"
CURRENT_USER="$(id -un)"
CURRENT_GROUP="$(id -gn)"

for path in \
  "$HOME_DIR/.codex" \
  "$HOME_DIR/.claude" \
  "$HOME_DIR/.claude-state" \
  "$HOME_DIR/.agents"
do
  mkdir -p "$path"
  if command -v sudo >/dev/null 2>&1; then
    sudo chown -R "$CURRENT_USER:$CURRENT_GROUP" "$path"
  fi
  chmod u+rwx "$path"
done
