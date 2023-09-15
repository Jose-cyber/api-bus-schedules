/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('horarios').del()
  await knex('itinerarios').del()

  await knex('itinerarios').insert([
    { name: 'ml_sjc', alias: "Monteiro Lobato x São José dos Campos"},
    { name: 'ml_sbt', alias: "Monteiro Lobato x São Benedito"},
    { name: 'sbt_ml', alias: "São Benedito X Monteiro Lobato"},
    { name: 'sjc_ml', alias: "São José dos Campos x Monteiro Lobato"},
    { name: 'sjc_sfx', alias: "São José dos Campos x São francisco Xavier"},
    { name: 'sfx_sjc', alias: "São francisco Xavier x São José dos Campos"},
  ]);
  await knex('horarios').insert([
    { saida: '05:30', chegada: '06:30', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '06:40', chegada: '07:40', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '06:30', chegada: '07:30', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '08:10', chegada: '09:10', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '10:40', chegada: '11:40', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '12:40', chegada: '13:40', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '16:00', chegada: '17:00', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '17:40', chegada: '18:40', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '19:40', chegada: '20:40', semanal: true, sabado: false, domingo: false, itinerario: "ml_sjc" },
    { saida: '06:40', chegada: '07:40', semanal: false, sabado: true, domingo: false, itinerario: "ml_sjc" },
    { saida: '14:40', chegada: '15:40', semanal: false, sabado: true, domingo: false, itinerario: "ml_sjc" },
    { saida: '09:40', chegada: '10:40', semanal: false, sabado: false, domingo: true, itinerario: "ml_sjc" },
    { saida: '17:40', chegada: '18:40', semanal: false, sabado: false, domingo: true, itinerario: "ml_sjc" }, 
    { saida: '05:10', chegada: '06:10', semanal: true, sabado: false, domingo: false, itinerario: "ml_sbt"},
    { saida: '06:40', chegada: '07:40', semanal: true, sabado: false, domingo: false, itinerario: "ml_sbt"},
    { saida: '13:00', chegada: '14:00', semanal: true, sabado: false, domingo: false, itinerario: "ml_sbt"},
    { saida: '17:15', chegada: '18:15', semanal: true, sabado: false, domingo: false, itinerario: "ml_sbt"},

    { saida: '05:35', chegada: '06:35', semanal: true, sabado: false, domingo: false, itinerario: "sbt_ml"},
    { saida: '07:05', chegada: '08:05', semanal: true, sabado: false, domingo: false, itinerario: "sbt_ml"},
    { saida: '13:35', chegada: '14:35', semanal: true, sabado: false, domingo: false, itinerario: "sbt_ml"},
    { saida: '17:50', chegada: '18:50', semanal: true, sabado: false, domingo: false, itinerario: "sbt_ml"},

    { saida: '06:00', chegada: '07:00', semanal: true, sabado: false, domingo: false, itinerario: "sfx_sjc" },
    { saida: '10:00', chegada: '11:00', semanal: true, sabado: false, domingo: false, itinerario: "sfx_sjc" },
    { saida: '12:00', chegada: '13:00', semanal: true, sabado: false, domingo: false, itinerario: "sfx_sjc" },
    { saida: '17:00', chegada: '18:00', semanal: true, sabado: false, domingo: false, itinerario: "sfx_sjc" },
    { saida: '19:00', chegada: '20:00', semanal: true, sabado: false, domingo: false, itinerario: "sfx_sjc" },
    { saida: '06:00', chegada: '07:00', semanal: false, sabado: true, domingo: false, itinerario: "sfx_sjc" },
    { saida: '14:00', chegada: '15:00', semanal: false, sabado: true, domingo: false, itinerario: "sfx_sjc" },
    { saida: '09:00', chegada: '10:00', semanal: false, sabado: false, domingo: true, itinerario: "sfx_sjc" },
    { saida: '17:00', chegada: '18:00', semanal: false, sabado: false, domingo: true, itinerario: "sfx_sjc" },

    { saida: '07:00', chegada: '08:00', semanal: true, sabado: false, domingo: false, itinerario: "sjc_ml" },
    { saida: '14:00', chegada: '15:00', semanal: true, sabado: false, domingo: false, itinerario: "sjc_ml" },
    { saida: '16:00', chegada: '17:00', semanal: true, sabado: false, domingo: false, itinerario: "sjc_ml" },
    { saida: '18:30', chegada: '19:30', semanal: true, sabado: false, domingo: false, itinerario: "sjc_ml" },
    { saida: '20:40', chegada: '21:40', semanal: true, sabado: false, domingo: false, itinerario: "sjc_ml" },

    { saida: '05:40', chegada: '06:40', semanal: true, sabado: false, domingo: false, itinerario: "sjc_sfx" },
    { saida: '10:00', chegada: '11:00', semanal: true, sabado: false, domingo: false, itinerario: "sjc_sfx" },
    { saida: '12:00', chegada: '13:00', semanal: true, sabado: false, domingo: false, itinerario: "sjc_sfx" },
    { saida: '17:10', chegada: '18:10', semanal: true, sabado: false, domingo: false, itinerario: "sjc_sfx" },
    { saida: '07:40', chegada: '08:40', semanal: false, sabado: true, domingo: false, itinerario: "sjc_sfx" },
    { saida: '17:00', chegada: '18:00', semanal: false, sabado: true, domingo: false, itinerario: "sjc_sfx" },
    { saida: '07:00', chegada: '08:00', semanal: false, sabado: false, domingo: true, itinerario: "sjc_sfx" },
    { saida: '14:00', chegada: '15:00', semanal: false, sabado: false, domingo: true, itinerario: "sjc_sfx" },

  ]);
};
