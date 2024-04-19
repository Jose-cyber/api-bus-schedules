/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('schedules').del()
  await knex('ways').del()
  await knex('itineraries').del()
  

  await knex('itineraries').insert([
    { name: 'ml_sjc', alias: "Monteiro Lobato x São José dos Campos"},
    { name: 'ml_sbt', alias: "Monteiro Lobato x São Benedito"},
    { name: 'sbt_ml', alias: "São Benedito X Monteiro Lobato"},
    { name: 'sjc_ml', alias: "São José dos Campos x Monteiro Lobato"},
    { name: 'sjc_sfx', alias: "São José dos Campos x São francisco Xavier"},
    { name: 'sfx_sjc', alias: "São francisco Xavier x São José dos Campos"},
  ]);
  await knex('schedules').insert([
    { start: '05:30', end: '06:30', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '06:40', end: '07:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '06:30', end: '07:30', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '08:10', end: '09:10', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '10:40', end: '11:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '12:40', end: '13:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '16:00', end: '17:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '17:40', end: '18:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '19:40', end: '20:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '06:40', end: '07:40', weekly: false, saturday: true, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '14:40', end: '15:40', weekly: false, saturday: true, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '09:40', end: '10:40', weekly: false, saturday: false, sunday: true, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '17:40', end: '18:40', weekly: false, saturday: false, sunday: true, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" }, 
    { start: '05:10', end: '06:10', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sbt", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '06:40', end: '07:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sbt", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '13:00', end: '14:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sbt", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '17:15', end: '18:15', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sbt", itineraries_alias: "Monteiro Lobato x São José dos Campos" },

    { start: '05:35', end: '06:35', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sbt_ml", itineraries_alias: "São Benedito X Monteiro Lobato" },
    { start: '07:05', end: '08:05', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sbt_ml", itineraries_alias: "São Benedito X Monteiro Lobato" },
    { start: '13:35', end: '14:35', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sbt_ml", itineraries_alias: "São Benedito X Monteiro Lobato" },
    { start: '17:50', end: '18:50', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sbt_ml", itineraries_alias: "São Benedito X Monteiro Lobato" },

    { start: '06:00', end: '07:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '10:00', end: '11:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '12:00', end: '13:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '17:00', end: '18:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '19:00', end: '20:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '06:00', end: '07:00', weekly: false, saturday: true, sunday: false, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '14:00', end: '15:00', weekly: false, saturday: true, sunday: false, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '09:00', end: '10:00', weekly: false, saturday: false, sunday: true, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },
    { start: '17:00', end: '18:00', weekly: false, saturday: false, sunday: true, come_from_sfx: false, itineraries_name: "sfx_sjc", itineraries_alias: "São francisco Xavier x São José dos Campos" },

    { start: '07:00', end: '08:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_ml", itineraries_alias: "São José dos Campos x Monteiro Lobato" },
    { start: '14:00', end: '15:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_ml", itineraries_alias: "São José dos Campos x Monteiro Lobato" },
    { start: '16:00', end: '17:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_ml", itineraries_alias: "São José dos Campos x Monteiro Lobato" },
    { start: '18:30', end: '19:30', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_ml", itineraries_alias: "São José dos Campos x Monteiro Lobato" },
    { start: '20:40', end: '21:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_ml", itineraries_alias: "São José dos Campos x Monteiro Lobato" },

    { start: '05:40', end: '06:40', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },
    { start: '10:00', end: '11:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },
    { start: '12:00', end: '13:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },
    { start: '17:10', end: '18:10', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },
    { start: '07:40', end: '08:40', weekly: false, saturday: true, sunday: false, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },
    { start: '17:00', end: '18:00', weekly: false, saturday: true, sunday: false, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },
    { start: '07:00', end: '08:00', weekly: false, saturday: false, sunday: true, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },
    { start: '14:00', end: '15:00', weekly: false, saturday: false, sunday: true, come_from_sfx: false, itineraries_name: "sjc_sfx", itineraries_alias: "São José dos Campos x São francisco Xavier" },

  ]);

  await knex('ways').insert([
    { 
      route_alias: 'Monteiro Lobato x São José dos Campos', 
      route_name: 'ml_sjc', 
      bus_stops: JSON.stringify([
        "Parada 1", 
        "Parada 2", 
        "Parada 3",
        "Parada 4",
        "Parada 5", 
        "Parada 6", 
        "Parada 7",
        "Parada 7"
       ]) 
    },
    { 
      route_alias: 'Monteiro Lobato x São Benedito', 
      route_name: 'ml_sbt', 
      bus_stops: JSON.stringify([
        "Parada 1", 
        "Parada 2", 
        "Parada 3",
        "Parada 4",
        "Parada 5", 
        "Parada 6", 
        "Parada 7",
        "Parada 7"
       ]) 
    },
    { 
      route_alias: 'São Benedito X Monteiro Lobato', 
      route_name: 'sbt_ml', 
      bus_stops: JSON.stringify([
        "Parada 1", 
        "Parada 2", 
        "Parada 3",
        "Parada 4",
        "Parada 5", 
        "Parada 6", 
        "Parada 7",
        "Parada 7"
       ]) 
    },
    { 
      route_alias: 'São francisco Xavier x São José dos Campos', 
      route_name: 'sfx_sjc', 
      bus_stops: JSON.stringify([
        "Parada 1", 
        "Parada 2", 
        "Parada 3",
        "Parada 4",
        "Parada 5", 
        "Parada 6", 
        "Parada 7",
        "Parada 7"
       ]) 
    },
    { 
      route_alias: 'São José dos Campos x Monteiro Lobato', 
      route_name: 'sjc_ml', 
      bus_stops: JSON.stringify([
        "Parada 1", 
        "Parada 2", 
        "Parada 3",
        "Parada 4",
        "Parada 5", 
        "Parada 6", 
        "Parada 7",
        "Parada 7"
       ]) 
    },
    { 
      route_alias: 'São José dos Campos x São francisco Xavier', 
      route_name: 'sjc_sfx', 
      bus_stops: JSON.stringify([
        "Parada 1", 
        "Parada 2", 
        "Parada 3",
        "Parada 4",
        "Parada 5", 
        "Parada 6", 
        "Parada 7",
        "Parada 7"
       ]) 
    },
    { 
      route_alias: 'São francisco Xavier x São José dos Campos', 
      route_name: 'sfx_sjc', 
      bus_stops: JSON.stringify([
        "Parada 1", 
        "Parada 2", 
        "Parada 3",
        "Parada 4",
        "Parada 5", 
        "Parada 6", 
        "Parada 7",
        "Parada 7"
       ]) 
    }

    
  ]);
}
