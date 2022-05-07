exports.up = async function (knex) {
  await knex.schema.createTable("pets", (table) => {
    table.increments("pet_id");
    table.text("name", 256).notNullable();
    table.text("type", 64).notNullable();
    table.text("breed", 64).notNullable();
    table.integer("age");
    table.text("description");
    table.boolean("adopted");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("pets");
};
