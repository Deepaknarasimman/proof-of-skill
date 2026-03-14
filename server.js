/* ============================================
   Proof-of-Skill — Zero-Dependency Server
   Run with: node server.js
   ============================================ */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// ASCII Art Banner
const BANNER = `
\x1b[35m
  ╔══════════════════════════════════════════════════════╗
  ║                                                      ║
  ║   ⬡  P R O O F - O F - S K I L L                    ║
  ║      Polygon On-Chain Skills Platform                ║
  ║                                                      ║
  ╠══════════════════════════════════════════════════════╣
  ║                                                      ║
  ║   🌐  Server:  \x1b[36mhttp://localhost:${PORT}\x1b[35m                  ║
  ║   ⛓️   Network: Polygon Mainnet (Simulated)          ║
  ║   🔒  Status:  Running & Secure                      ║
  ║                                                      ║
  ╠══════════════════════════════════════════════════════╣
  ║                                                      ║
  ║   Features:                                          ║
  ║   🎯 Proof-of-Skill Challenges                       ║
  ║   🏅 NFT Skill Badges                                ║
  ║   📊 Skill Reputation Score                           ║
  ║                                                      ║
  ╚══════════════════════════════════════════════════════╝
\x1b[0m
  \x1b[33m→ Press Ctrl+C to stop the server\x1b[0m
`;

const server = http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(ROOT, filePath.split('?')[0]);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // SPA fallback
        fs.readFile(path.join(ROOT, 'index.html'), (e, html) => {
          if (e) { res.writeHead(500); res.end('Server Error'); return; }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
        });
      } else {
        res.writeHead(500);
        res.end('Server Error');
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.clear();
  console.log(BANNER);

  // Auto-open browser
  const { exec } = require('child_process');
  const url = `http://localhost:${PORT}`;
  const platform = process.platform;
  if (platform === 'win32') exec(`start ${url}`);
  else if (platform === 'darwin') exec(`open ${url}`);
  else exec(`xdg-open ${url}`);
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(`\x1b[31m✖ Port ${PORT} is already in use. Trying ${PORT + 1}...\x1b[0m`);
    server.listen(PORT + 1);
  }
});
