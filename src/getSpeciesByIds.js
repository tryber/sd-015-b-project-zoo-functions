const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((especie) => ids.includes(especie.id));
  // Fim do código
}

module.exports = getSpeciesByIds;
