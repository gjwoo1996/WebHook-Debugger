#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOME_DIR="${HOME:-/home/vscode}"
CURRENT_USER="$(id -un)"
CURRENT_GROUP="$(id -gn)"

ensure_user_owned() {
  for path in "$@"; do
    mkdir -p "$path"
    if command -v sudo >/dev/null 2>&1; then
      sudo chown -R "$CURRENT_USER:$CURRENT_GROUP" "$path"
    fi
    chmod u+rwx "$path"
  done
}

ensure_user_owned "$HOME_DIR/.codex" "$HOME_DIR/.claude" "$HOME_DIR/.claude-state"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required to install Codex CLI. Check the devcontainer Node feature." >&2
  exit 1
fi

npm install -g @openai/codex@latest || {
  if command -v sudo >/dev/null 2>&1; then
    sudo npm install -g @openai/codex@latest
  else
    echo "Failed to install Codex CLI globally and sudo is unavailable." >&2
    exit 1
  fi
}

mkdir -p "$HOME_DIR/.claude-state"

if [ -f "$HOME_DIR/.claude.json" ] && [ ! -L "$HOME_DIR/.claude.json" ] && [ ! -s "$HOME_DIR/.claude-state/.claude.json" ]; then
  cp "$HOME_DIR/.claude.json" "$HOME_DIR/.claude-state/.claude.json"
else
  touch "$HOME_DIR/.claude-state/.claude.json"
fi

ln -sfn "$HOME_DIR/.claude-state/.claude.json" "$HOME_DIR/.claude.json"
chmod 600 "$HOME_DIR/.claude-state/.claude.json"

bash "$SCRIPT_DIR/install-superpowers.sh"

ensure_user_owned "$HOME_DIR/.codex" "$HOME_DIR/.claude" "$HOME_DIR/.claude-state" "$HOME_DIR/.agents"

echo "AI tooling installed:"
echo "  codex: $(command -v codex || true)"
echo "  claude: $(command -v claude || true)"
echo "  gh: $(command -v gh || true)"
