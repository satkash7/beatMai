# Beat Expertise — Deployment Guide

## Build

```bash
cd home/
yarn build
```

This generates the `.output/` folder — that's your entire deployable app.

## What to Deploy

Upload the **`.output/`** folder to your server. Nothing else is needed.

```
.output/
├── server/        # Node.js server (SSR)
│   └── index.mjs  # ← ENTRY FILE
├── public/        # Static assets (CSS, JS, images, robots.txt)
└── nitro.json     # Server config
```

## Start the Server

```bash
node .output/server/index.mjs
```

The app runs on port **3000** by default.  
Set a custom port with:

```bash
PORT=8080 node .output/server/index.mjs
```

## With PM2 (Recommended for Production)

```bash
pm2 start .output/server/index.mjs --name beatexpertise
pm2 save
pm2 startup
```

## Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name beatexpertise.com www.beatexpertise.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

## Summary

| Item | Value |
|------|-------|
| **Deploy folder** | `.output/` |
| **Entry file** | `.output/server/index.mjs` |
| **Start command** | `node .output/server/index.mjs` |
| **Default port** | 3000 |
| **Requires Node.js** | Yes (v18+) |
