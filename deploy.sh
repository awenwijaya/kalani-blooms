#!/bin/bash

set -e

PROJECT_DIR="/var/www/kalani-blooms"
APP_NAME="kalani-blooms"

echo "========================================"
echo "Starting deployment..."
echo "========================================"

cd "$PROJECT_DIR"

echo "[1/4] Updating source code..."
git fetch origin main
git reset --hard origin/main

echo "[2/4] Installing dependencies..."
npm ci

echo "[3/4] Building Next.js application..."
npm run build

echo "[4/4] Restarting PM2..."
pm2 restart "$APP_NAME"

echo "========================================"
echo "Deployment completed successfully!"
echo "========================================"

pm2 status "$APP_NAME"
