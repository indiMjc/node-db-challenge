const db = require('../../data/dbConfig');

module.exports = {
  findRes,
  addRes
};

function findRes() {
  return db('resources');
}

function addRes(resource) {
  return db('resources')
    .insert(resource)
    .then(id => {
      return db('resources').where({ id: id[0] });
    });
}
