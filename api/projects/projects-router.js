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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Projects.findProjectById(id)
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get project.' });
    });
});

router.get('/:id/withtasks', (req, res) => {
  Projects.findProjectWithTasks(req.params.id)
    .then(project => {
      project.completed = project.completed ? true : false;
      project.tasks.map(task => {
        delete task.project_id;
        !task.notes && delete task.notes;
        task.completed = task.completed ? true : false;
      });
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get project with tasks.' });
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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  Projects.updateProject(id, req.body)
    .then(() => {
      return Projects.findProjectById(id).then(project => {
        res.status(201).json(project);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Edit post failed.' });
    });
});

module.exports = router;
