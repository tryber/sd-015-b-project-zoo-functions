const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) { // Função recebe como parametro um array de parametros.
  // seu código aqui
  if (ids.length === 0) return []; // Verifica se a função recebeu algum parametro.
  
  const filterId = ids.map((id) => {
    const filter = data.species.filter((anotherId) => ( anotherId.id === id ? true : false ));
    return filter[0];
  });
  return filterId;
}

module.exports = getSpeciesByIds;
