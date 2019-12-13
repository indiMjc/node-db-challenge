exports.seed = function(knex) {
  return knex('tasks')
    .truncate()
    .then(function() {
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          description: 'do stuff',
          notes: 'notes on doing stuff'
        },
        {
          id: 2,
          project_id: 2,
          description: 'build stuff',
          notes: 'notes on doing stuff'
        },
        {
          id: 3,
          project_id: 3,
          description: 'sleep a little'
        },
        {
          id: 4,
          project_id: 1,
          description: 'break code'
        },
        {
          id: 5,
          project_id: 2,
          description: 'debug code',
          notes: 'have to debug some stuff'
        },
        {
          id: 6,
          project_id: 3,
          description: 'work on dev shop'
        }
      ]);
    });
};
