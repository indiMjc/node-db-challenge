const express = require('express');

const server = express();

server.use(express.json());

server.use('/', (req, res) => {
  res.json({ message: 'Server up and running.' });
});

module.exports = server;
