const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get projects list.' });
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;
  Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to add new project.' });
    });
});

module.exports = router;
