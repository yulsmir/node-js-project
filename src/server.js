'use strict';

import dotenv from 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/', router);
app.use(express.static(path.resolve(new URL('./', import.meta.url).pathname, '../public')));
app.use(express.static('public'));

// Route handler for '/'
app.get('/', async (req, res) => {
  // Resolve the path to the index.html file
  const indexPath = path.join(__dirname, 'index.html');

  // Send the index.html file as a response
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
