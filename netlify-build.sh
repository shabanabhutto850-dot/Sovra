#!/bin/bash
set -e

echo "=== Netlify Build Script ==="
echo "Node: $(node --version)"
echo "npm:  $(npm --version)"

# ── 1. Ensure pnpm is available ──────────────────────────────────────────────
if ! command -v pnpm &>/dev/null; then
  echo "Installing pnpm@10 globally..."
  npm install -g pnpm@10 --no-fund --no-audit --loglevel=error
fi
echo "pnpm: $(pnpm --version)"

# ── 2. Set npm_config_user_agent so the root preinstall check passes ─────────
# The root package.json preinstall script exits 1 unless it sees pnpm/* here.
export npm_config_user_agent="pnpm/$(pnpm --version) npm/0 node/$(node --version) linux x64"

# ── 3. Install all workspace dependencies ────────────────────────────────────
pnpm install --no-frozen-lockfile

# ── 4. Build the sovra frontend ───────────────────────────────────────────────
echo "Building @workspace/sovra..."
export BASE_PATH="/"
pnpm --filter @workspace/sovra build

echo "=== Build complete → artifacts/sovra/dist/public ==="
