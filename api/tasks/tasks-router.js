const express = require('express');

const Tasks = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      tasks.forEach(task => {
        task.completed = task.completed ? true : false;
      });
      res.status(201).json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Could not get tasks.' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Tasks.getTaskByProject(id)
    .then(tasks => {
      tasks.forEach(task => {
        !task.notes ? delete task.notes : null;
        task.completed = task.completed ? true : false;
      });
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
    .then(ids => {
      return Tasks.getTaskById(ids[0]).then(task => {
        !task.notes ? delete task.notes : null;
        task.completed = task.completed ? true : false;
        res.status(201).json(task);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to add new task.' });
    });
});

module.exports = router;
