exports.seed = function(knex) {
  return knex('projects')
    .truncate()
    .then(function() {
      return knex('projects').insert([
        {
          id: 1,
          name: 'change tires',
          description: 'need to bring tires and rims in to be changed'
        },
        {
          id: 2,
          name: 'build front end stuff for devshop',
          description:
            'need to make decisions on things like state management and animation libs'
        },
        {
          id: 3,
          name: 'start working out',
          description: 'quit being lazy, you bum'
        }
      ]);
    });
};
