exports.seed = function(knex) {
  return knex('resources')
    .truncate()
    .then(function() {
      return knex('resources').insert([
        {
          id: 1,
          name: 'bernard',
          description: 'make use of the super intellegent ai'
        },
        { id: 2, name: 'w3schools' },
        {
          id: 3,
          name: 'slack',
          description: 'lambdas slack is better than stack overflow'
        }
      ]);
    });
};
