# Single-server Fullstack Typescript Starter

Based on DeepSeek's responses.

## Quick Overview

```sh
npm i
```

Local development:

```sh
npm run dev
```

Build and launch production version (only node.js process):

```sh
npm run start
```

## How It Works

### In dev mode:

- The server runs via ts-node with nodemon for reloading on changes
- The client runs via webpack-dev-server with hot-reload
- All API requests are proxied from the client to the server

### In production mode:

- All code is compiled to the dist folder
- Node.js server:
  - Serves API endpoints
  - Serves static files from dist
  - Returns index.html for all other routes (for React Router)

### This architecture provides:

- A single entry point in production
- Simple development with hot-reload
- Shared TypeScript types between client and server
- Clear code separation through aliases (@client, @server, @shared)
