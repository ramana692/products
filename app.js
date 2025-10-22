const http = require('http');
const express = require('express');
const cors = require('cors');
const os = require('os');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware using http module
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/products', productRoutes);

// System information
const systemInfo = {
  platform: os.platform(),
  type: os.type(),
  release: os.release(),
  totalMemory: `${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
  cpus: os.cpus().length,
  uptime: `${(os.uptime() / 60 / 60).toFixed(2)} hours`
};

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('System Information:', JSON.stringify(systemInfo, null, 2));
});

module.exports = app;
