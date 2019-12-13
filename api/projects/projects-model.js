const db = require('../../data/dbConfig');

module.exports = {
  findProjects
};

function findProjects() {
  return db('projects');
}
