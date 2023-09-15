exports.up = function(knex) {
    return knex.schema
        .createTable('itinerarios', function(table){
            table.increments('id').primary();
            table.string('name', 55).notNullable().unique();
            table.string('alias', 255).notNullable();
            
        })

        .createTable('horarios', function(table){
            table.increments('id').primary();
            table.time('saida').notNull();
            table.time('chegada').notNull();
            table.boolean('semanal').notNullable();
            table.boolean('sabado').notNullable();
            table.boolean('domingo').notNullable();
            table.string('itinerario').references('name').inTable('itinerarios').index();
        });
};

exports.down = function(knex) {
    return knex.schema
      .dropTable('itinerarios')
      .dropTable('horarios');
};

