const express = require('express');

const Tasks = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(201).json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Could not get tasks.' });
    });
});

router.post('/:id', (req, res) => {
  const newTask = req.body;
  const { id } = req.params;

  Tasks.addTask(newTask, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to add new task.' });
    });
});

module.exports = router;
