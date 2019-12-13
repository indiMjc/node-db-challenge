const db = require('../../data/dbConfig');

module.exports = {
  addTask
};

function addTask(task, id) {
  const taskData = {
    ...task,
    project_id: id
  };
  return db('tasks').insert(taskData);
}
