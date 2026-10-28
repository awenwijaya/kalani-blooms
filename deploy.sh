#!/bin/bash

set -e

PROJECT_DIR="/var/www/kalani-blooms"
APP_NAME="kalani-blooms"

echo "========================================"
echo "Starting deployment..."
echo "========================================"

cd "$PROJECT_DIR"

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
