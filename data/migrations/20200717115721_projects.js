
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable(); //required field
    tbl.string('description', 255).nullable(); // not a required field
    tbl.boolean('completed').notNullable().defaultTo(false); // required, defaults false
  })

  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    tbl.string('description', 255).notNullable();
    tbl.string('notes', 255).nullable();
    tbl.boolean('completed').notNullable().defaultTo(false);
  })

  .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable().unique()
      tbl.string('description').nullable()
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
