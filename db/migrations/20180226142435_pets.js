
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pets', (table)=>{
    table.increments();
    table.string("name").notNullable();
    table.string("breed");
    table.integer("age");
    table.integer("owner_id")
      .references("id")
      .inTable("owners")
      .onDelete("CASCADE")
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pets');
};
