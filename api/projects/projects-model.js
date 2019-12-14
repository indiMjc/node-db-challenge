const db = require('../../data/dbConfig');

module.exports = {
  findProjects,
  findProjectById,
  findProjectWithTasks,
  addProject,
  updateProject
};

function findProjects() {
  return db('projects');
}

function findProjectById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function findProjectWithTasks(id) {
  return findProjectById(id).then(project => {
    return db('tasks')
      .where({ project_id: id })
      .then(tasks => {
        return {
          ...project,
          tasks: tasks
        };
      });
  });
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(id => {
      return db('projects')
        .where({ id: id[0] })
        .first();
    });
}

function updateProject(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes);
}
