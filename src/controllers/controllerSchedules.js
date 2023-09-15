knex
  .select(
    'tp.id',
    'tp.saida',
    'tp.chegada',
    'tp.semanal',
    'tp.sabado',
    'tp.domingo',
    'i.nome as itinerario'
  )
  .from('tabela_principal as tp')
  .innerJoin('itinerarios as i', 'tp.itinerario_id', 'i.id')
  .then(rows => {
    console.log(rows);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    knex.destroy();
  });