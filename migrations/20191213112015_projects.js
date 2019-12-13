exports.up = function(knex) {
  return knex.schema
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable;
      tbl.text('description');
    })
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.text('description');
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description').notNullable();
      tbl.string('notes', 555);
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources');
};
