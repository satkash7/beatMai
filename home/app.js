const { Nuxt, Builder } = require('nuxt');
const express = require('express');
const path = require('path'); // For resolving paths

const app = express();
const config = require('./nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
  const nuxt = new Nuxt(config);

  // Build only in development mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Serve the Nuxt static files from .nuxt/dist/client (for _nuxt files)
  app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist', 'client'), {
    maxAge: '1d'
  }));

  // Nuxt render middleware for SSR
  app.use(nuxt.render);

  const hostname = '127.0.0.1'; // Keep Phusion Passenger’s setup
  const port = process.env.PORT || 'passenger';
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  // Catch all other routes and forward them to Nuxt
  app.use((req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '.nuxt/dist/client/index.html'));
  });
}

start();
