const express = require('express');

const server = express();

const ResourcesRouter = require('./api/resources/resources-router');

server.use(express.json());
server.use('/resources', ResourcesRouter);

server.use('/', (req, res) => {
  res.json({ message: 'Server up and running.' });
});

module.exports = server;
