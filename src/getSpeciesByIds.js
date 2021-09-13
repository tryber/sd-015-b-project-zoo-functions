const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((specie, i) => specie.id === ids[i]);
  // Fim do código
}

module.exports = getSpeciesByIds;
