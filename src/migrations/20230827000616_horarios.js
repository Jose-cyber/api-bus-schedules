exports.up = function(knex) {
    return knex.schema
        .createTable('itineraries', function(table){
            table.increments('id').primary();
            table.string('name', 55).notNullable().unique()
            table.string('alias', 255).notNullable().unique()
        })

        .createTable('schedules', function(table){
            table.increments('id').primary();
            table.time('start').notNull();
            table.time('end').notNull();
            table.boolean('weekly').notNullable();
            table.boolean('saturday').notNullable();
            table.boolean('sunday').notNullable();
            table.boolean('come_from_sfx').notNullable();
            table.string('itineraries_name').references('name').inTable('itineraries').index();
            table.string('itineraries_alias').references('alias').inTable('itineraries').index();
        });
};

exports.down = function(knex) {
    return knex.schema
      .dropTable('itineraries')
      .dropTable('schedules');
};

