# Powercord Plugin Template
* ESM + TS(X) Plugin template for [powercord](https://github.com/powercord-org) using rollup + esbuild.

# Setup
```bash
npm install
```

# Usage
```bash
npm run release # release builds
npm run dev # for development
```

# FAQ
### Q: No `index.js` in the root folder needed?
### A: Yeah, you don't need one, the entry point for the plugin is defined in `package.json` as `"main": "dist/index.js"`.
