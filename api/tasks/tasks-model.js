const db = require('../../data/dbConfig');

module.exports = {
  getTasks,
  addTask
};

function getTasks() {
  return db
    .select(
      'tasks.description AS Task',
      'projects.name AS ProjectName',
      'projects.description AS ProjectDescription'
    )
    .from('tasks')
    .join('projects', 'tasks.project_id', 'projects.id');
}

function addTask(task, id) {
  const taskData = {
    ...task,
    project_id: id
  };
  return db('tasks').insert(taskData);
}
