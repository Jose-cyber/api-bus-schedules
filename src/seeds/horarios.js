/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('schedules').del()
  await knex('ways').del()
  await knex('maps').del()
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
    { start: '06:40', end: '07:40', weekly: true, saturday: false, sunday: false, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '06:30', end: '07:30', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '08:10', end: '09:10', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '10:40', end: '11:40', weekly: true, saturday: false, sunday: false, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '12:40', end: '13:40', weekly: true, saturday: false, sunday: false, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '16:00', end: '17:00', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '17:40', end: '18:40', weekly: true, saturday: false, sunday: false, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '19:40', end: '20:40', weekly: true, saturday: false, sunday: false, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '06:40', end: '07:40', weekly: false, saturday: true, sunday: false, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '14:40', end: '15:40', weekly: false, saturday: true, sunday: false, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '09:40', end: '10:40', weekly: false, saturday: false, sunday: true, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" },
    { start: '17:40', end: '18:40', weekly: false, saturday: false, sunday: true, come_from_sfx: true, itineraries_name: "ml_sjc", itineraries_alias: "Monteiro Lobato x São José dos Campos" }, 
    { start: '05:10', end: '06:10', weekly: true, saturday: false, sunday: false, come_from_sfx: false, itineraries_name: "ml_sbt", itineraries_alias: "Monteiro Lobato x São José dos Campos" },

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
        "Terminal Rodoviário de Monteiro Lobato",
        "Rua Abílio Pereira Dias",
        "SP-050 Rod. Monteiro Lobato",
        "Av. Rui Barbosa",
        "R. Audemo Veneziani",
        "R. Cap. Elisiário",
        "Av. São José",
        "Av. Madre Thereza",
        "R. Euclides Miragaia",
        "Av. Dr. João Guilhermino",
        "R. Dolzani Ricardo",
        "Rua Genésia Berardinelli Tarantino",
        "R. Itororó",
        "Terminal Rodoviário Intermunicipal Frederico Ozanam (Rodoviária Nova)"
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
        "Rua 15 de Novembro",
        "SJC-150 Estr. Ver. Pedro David",
        "Estr. Ver. Pedro David",
        "Rua Braz Ribeiro Prince",
        "Terminal Rodoviário de Monteiro Lobato",
        "Rua Abílio Pereira Dias",
        "SP-050 Rod. Monteiro Lobato",
        "Av. Rui Barbosa",
        "R. Audemo Veneziani",
        "R. Cap. Elisiário",
        "Av. São José",
        "Av. Madre Thereza",
        "R. Euclides Miragaia",
        "Av. Dr. João Guilhermino",
        "R. Dolzani Ricardo",
        "Rua Genésia Berardinelli Tarantino",
        "R. Itororó",
        "Terminal Rodoviário Intermunicipal Frederico Ozanam (Rodoviária Nova)"
      ]) 
    },
    { 
      route_alias: 'São José dos Campos x Monteiro Lobato', 
      route_name: 'sjc_ml', 
      bus_stops: JSON.stringify([
        "Terminal Rodoviário Intermunicipal Frederico Ozanam (Rodoviária Nova)",
        "Avenida Santos Dumont",
        "R. Ceci",
        "Rua Tupã",
        "Av. Pedro Álvares Cabral",
        "R. Antônio Saes",
        "R. Francisco Rafael",
        "R. Carvalho de Araújo",
        "Av. Eng. Sebastião Gualberto",
        "Av. Olivo Gomes",
        "Av. Princesa Isabel",
        "R. Manoel Rodrigues de Moraes",
        "R. Audemo Veneziani",
        "Av. Rui Barbosa",
        "Rod. Monteiro Lobato",
        "SP-050 Rod. Monteiro Lobato",
        "Rod. Estadual SP-50",
        "Rua Abílio Pereira Dias",
        "Terminal Rodoviário de Monteiro Lobato"
      ]) 
    },
    { 
      route_alias: 'São José dos Campos x São francisco Xavier', 
      route_name: 'sjc_sfx', 
      bus_stops: JSON.stringify([
        "TERMINAL RODOVIARIO FREDERICO OZANAM",
        "RUA ANTONIO PORFIRIO DA SILVA",
        "AVENIDA NAIR TOLEDO DE MIRA",
        "RUA CECI",
        "RUA UMUARAMA",
        "RUA TUPA",
        "AVENIDA PEDRO ALVARES CABRAL",
        "RUA CORONEL MORAES",
        "RUA ANTONIO SAES",
        "RUA FRANCISCO RAFAEL",
        "RUA CARVALHO DE ARAUJO",
        "AVENIDA ENGENHEIRO SEBASTIAO GUALBERTO",
        "RUA SEBASTIAO FELICIO",
        "AVENIDA TENENTE NEIRO BORACHO",
        "AVENIDA OLIVIO GOMES",
        "AVENIDA PRINCESA ISABEL",
        "RUA MANOEL RODRIGUES DE MORAES",
        "RUA AUDEMO VENEZIANI",
        "RODOVIA MONTEIRO LOBATO - SP 050",
        "RUA ABILIO PEREIRA DIAS",
        "PRACA COMENDADOR FREIRE",
        "RUA ANTONIO ALVES MAGALHAES",
        "RUA HUMBERTO CAPELIN",
        "TERMINAL RODOVIARIO DE MONTEIRO LOBATO",
        "RUA VEREADOR PEDRO DATTI",
        "RUA BRAZ RIBEIRO PRINCE",
        "RUA TREZE DE MAIO",
        "ESTRADA VEREADOR PEDRO DAVID",
        "RUA QUINZE DE NOVEMBRO",
        "PRACA CONEGO ANTONIO MANZI"
      ]) 
    }]);
    await knex('maps').insert([
      {
        maps_name: "ml_sjc",
        link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117460.36904387841!2d-45.962616932049976!3d-23.073783301079562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x94cc41915fc82ce1%3A0x466c3ae9a69b23f7!2sMonteiro%20Lobato%2C%20SP!3m2!1d-22.9545553!2d-45.8386923!4m5!1s0x94cc4a46c5d1d625%3A0x3ef4fa43cc7ec035!2sTerminal%20Rodovi%C3%A1rio%20Intermunicipal%20Frederico%20Ozanam%20(Rodovi%C3%A1ria%20Nova)!3m2!1d-23.193125199999997!2d-45.8782858!5e0!3m2!1spt-BR!2sbr!4v1719696290192!5m2!1spt-BR!2sbr"
      },
      {
        maps_name: "ml_sbt",
        link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117460.36904387841!2d-45.962616932049976!3d-23.073783301079562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x94cc41915fc82ce1%3A0x466c3ae9a69b23f7!2sMonteiro%20Lobato%2C%20SP!3m2!1d-22.9545553!2d-45.8386923!4m5!1s0x94cc4a46c5d1d625%3A0x3ef4fa43cc7ec035!2sTerminal%20Rodovi%C3%A1rio%20Intermunicipal%20Frederico%20Ozanam%20(Rodovi%C3%A1ria%20Nova)!3m2!1d-23.193125199999997!2d-45.8782858!5e0!3m2!1spt-BR!2sbr!4v1719696290192!5m2!1spt-BR!2sbr"
      },
      {
        maps_name: "sbt_ml",
        link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117460.36904387841!2d-45.962616932049976!3d-23.073783301079562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x94cc41915fc82ce1%3A0x466c3ae9a69b23f7!2sMonteiro%20Lobato%2C%20SP!3m2!1d-22.9545553!2d-45.8386923!4m5!1s0x94cc4a46c5d1d625%3A0x3ef4fa43cc7ec035!2sTerminal%20Rodovi%C3%A1rio%20Intermunicipal%20Frederico%20Ozanam%20(Rodovi%C3%A1ria%20Nova)!3m2!1d-23.193125199999997!2d-45.8782858!5e0!3m2!1spt-BR!2sbr!4v1719696290192!5m2!1spt-BR!2sbr"
      },
      {
        maps_name: "sjc_ml",
        link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117460.36904387841!2d-45.962616932049976!3d-23.073783301079562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x94cc41915fc82ce1%3A0x466c3ae9a69b23f7!2sMonteiro%20Lobato%2C%20SP!3m2!1d-22.9545553!2d-45.8386923!4m5!1s0x94cc4a46c5d1d625%3A0x3ef4fa43cc7ec035!2sTerminal%20Rodovi%C3%A1rio%20Intermunicipal%20Frederico%20Ozanam%20(Rodovi%C3%A1ria%20Nova)!3m2!1d-23.193125199999997!2d-45.8782858!5e0!3m2!1spt-BR!2sbr!4v1719696290192!5m2!1spt-BR!2sbr"
      },
      {
        maps_name: "sjc_sfx",
        link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117460.36904387841!2d-45.962616932049976!3d-23.073783301079562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x94cc41915fc82ce1%3A0x466c3ae9a69b23f7!2sMonteiro%20Lobato%2C%20SP!3m2!1d-22.9545553!2d-45.8386923!4m5!1s0x94cc4a46c5d1d625%3A0x3ef4fa43cc7ec035!2sTerminal%20Rodovi%C3%A1rio%20Intermunicipal%20Frederico%20Ozanam%20(Rodovi%C3%A1ria%20Nova)!3m2!1d-23.193125199999997!2d-45.8782858!5e0!3m2!1spt-BR!2sbr!4v1719696290192!5m2!1spt-BR!2sbr"
      },
      {
        maps_name: "sjc_sfx",
        link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117460.36904387841!2d-45.962616932049976!3d-23.073783301079562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x94cc41915fc82ce1%3A0x466c3ae9a69b23f7!2sMonteiro%20Lobato%2C%20SP!3m2!1d-22.9545553!2d-45.8386923!4m5!1s0x94cc4a46c5d1d625%3A0x3ef4fa43cc7ec035!2sTerminal%20Rodovi%C3%A1rio%20Intermunicipal%20Frederico%20Ozanam%20(Rodovi%C3%A1ria%20Nova)!3m2!1d-23.193125199999997!2d-45.8782858!5e0!3m2!1spt-BR!2sbr!4v1719696290192!5m2!1spt-BR!2sbr"
      },
      {
        maps_name: "sfx_sjc",
        link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d117460.36904387841!2d-45.962616932049976!3d-23.073783301079562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x94cc41915fc82ce1%3A0x466c3ae9a69b23f7!2sMonteiro%20Lobato%2C%20SP!3m2!1d-22.9545553!2d-45.8386923!4m5!1s0x94cc4a46c5d1d625%3A0x3ef4fa43cc7ec035!2sTerminal%20Rodovi%C3%A1rio%20Intermunicipal%20Frederico%20Ozanam%20(Rodovi%C3%A1ria%20Nova)!3m2!1d-23.193125199999997!2d-45.8782858!5e0!3m2!1spt-BR!2sbr!4v1719696290192!5m2!1spt-BR!2sbr"
      },
    ]);
}
