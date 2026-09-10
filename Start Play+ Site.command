#!/bin/zsh

set -u

SCRIPT_DIR="${0:A:h}"
cd "$SCRIPT_DIR" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Install it from https://nodejs.org, then try again."
  read -r "?Press Return to close…"
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required and normally ships with Node.js. Reinstall Node.js, then try again."
  read -r "?Press Return to close…"
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Installing Play+ site dependencies…"
  npm install || {
    echo "Dependency installation failed. Review the error above."
    read -r "?Press Return to close…"
    exit 1
  }
fi

echo "Starting the Play+ site. Press Control-C to stop it."
export ASTRO_TELEMETRY_DISABLED=1
npm run dev

STATUS=$?
if [[ $STATUS -ne 0 ]]; then
  echo "The site stopped with an error (status $STATUS)."
  read -r "?Press Return to close…"
fi
exit $STATUS
