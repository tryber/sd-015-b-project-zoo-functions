const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return []; // retorna o array vazio caso receba nenhum parâmetro
  // console.log(ids);
  return data.species.filter(({ id }) => ids.some((element) => element === id));
}

// getSpeciesByIds(data.species[0].id);
module.exports = getSpeciesByIds;
