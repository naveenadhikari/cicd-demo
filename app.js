const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello there from august ', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

module.exports = app;
