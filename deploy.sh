#!/bin/bash

set -e

export NVM_DIR="$HOME/.nvm"

if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
else
    echo "ERROR: NVM tidak ditemukan di $NVM_DIR"
    exit 1
fi

nvm use 26.10.0

PROJECT_DIR="/var/www/kalani-blooms"
APP_NAME="kalani-blooms"

echo "========================================"
echo "Starting deployment..."
echo "========================================"

cd "$PROJECT_DIR"

echo "Node path: $(which node)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

echo "[1/3] Installing dependencies..."
npm ci

echo "[2/3] Building Next.js application..."
npm run build

echo "[3/3] Restarting PM2..."
pm2 restart "$APP_NAME"

echo "========================================"
echo "Deployment completed successfully!"
echo "========================================"

pm2 status "$APP_NAME"
