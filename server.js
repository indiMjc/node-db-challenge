const express = require('express');

const server = express();

const ResourcesRouter = require('./api/resources/resources-router');
const ProjectsRouter = require('./api/projects/projects-router');

server.use(express.json());
server.use('/resources', ResourcesRouter);
server.use('/projects', ProjectsRouter);

server.use('/', (req, res) => {
  res.json({ message: 'Server up and running.' });
});

module.exports = server;
