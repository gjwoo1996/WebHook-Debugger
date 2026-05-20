#!/usr/bin/env bash
set -euo pipefail

SUPERPOWERS_REPO="${SUPERPOWERS_REPO:-https://github.com/obra/superpowers.git}"
SUPERPOWERS_REF="${SUPERPOWERS_REF:-main}"
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
AGENTS_HOME="${AGENTS_HOME:-$HOME/.agents}"
INSTALL_DIR="$CODEX_HOME/superpowers"
SKILLS_LINK="$AGENTS_HOME/skills/superpowers"

if ! command -v git >/dev/null 2>&1; then
  echo "git is required to install Superpowers." >&2
  exit 1
fi

mkdir -p "$CODEX_HOME" "$AGENTS_HOME/skills"

if [ ! -d "$INSTALL_DIR/.git" ]; then
  rm -rf "$INSTALL_DIR"
  git clone --depth 1 --branch "$SUPERPOWERS_REF" "$SUPERPOWERS_REPO" "$INSTALL_DIR"
else
  if [ -z "$(git -C "$INSTALL_DIR" status --porcelain)" ]; then
    git -C "$INSTALL_DIR" fetch --depth 1 origin "$SUPERPOWERS_REF"
    git -C "$INSTALL_DIR" checkout -q FETCH_HEAD
  else
    echo "Superpowers checkout has local changes; leaving it untouched: $INSTALL_DIR"
  fi
fi

if [ ! -f "$INSTALL_DIR/skills/using-superpowers/SKILL.md" ]; then
  echo "Superpowers skills were not found after install: $INSTALL_DIR/skills" >&2
  exit 1
fi

ln -sfn "$INSTALL_DIR/skills" "$SKILLS_LINK"

echo "Superpowers skills installed for Codex:"
echo "  $SKILLS_LINK -> $INSTALL_DIR/skills"
