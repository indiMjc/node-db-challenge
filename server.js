const express = require('express');

const server = express();

const ResourcesRouter = require('./api/resources/resources-router');
const ProjectsRouter = require('./api/projects/projects-router');
const TasksRouter = require('./api/tasks/tasks-router');

server.use(express.json());
server.use('/resources', ResourcesRouter);
server.use('/projects', ProjectsRouter);
server.use('/tasks', TasksRouter);

server.use('/', (req, res) => {
  res.json({ message: 'Server up and running.' });
});

module.exports = server;
