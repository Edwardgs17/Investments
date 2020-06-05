exports.up = (knex) => knex.schema.createTable('investments', (table) => {
  table.increments('id');
  table.integer('idUser').unsigned().notNullable();
  table.integer('idProject').unsigned().notNullable();
  table.boolean('status').defaultTo('true');
  table.integer('idRewards').unsigned().notNullable();
  table.timestamps(true, true);
});

exports.down = (knex) => knex.schema.dropTable('investments');
