const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const idsAnimais = species.filter((especie) => ids.includes(especie.id));
  return idsAnimais;
}

module.exports = getSpeciesByIds;
