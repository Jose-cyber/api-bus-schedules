exports.up = function(knex) {
    return knex.schema
        .createTable('itineraries', function(table){
            table.increments('id').primary().unique();
            table.string('name', 55).notNullable().unique()
            table.string('alias', 255).notNullable().unique()
        })

        .createTable('schedules', function(table){
            table.increments('id').primary().unique();
            table.time('start').notNull();
            table.time('end').notNull();
            table.boolean('weekly').notNullable();
            table.boolean('saturday').notNullable();
            table.boolean('sunday').notNullable();
            table.boolean('come_from_sfx').notNullable();
            table.string('itineraries_name').references('name').inTable('itineraries').index();
            table.string('itineraries_alias').references('alias').inTable('itineraries').index();
        })

        .createTable('ways', function(table){
            table.string('route_alias', 255).notNull().references('alias').inTable('itineraries').index();;
            table.string('route_name', 100).notNull().references('name').inTable('itineraries').index();;
            table.jsonb('bus_stops')
         })
        
        .createTable('maps', function(table){
            table.string('maps_name', 100).notNull().references('name').inTable('itineraries').index();;
            table.text('link')
         });
};

exports.down = function(knex) {
    return knex.schema
      .dropTable('schedules')
      .dropTable('ways')
      .dropTable('maps')
      .dropTable('itineraries')
};

