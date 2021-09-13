const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const buscaEspecies = species.filter((especie) => ids.includes(especie.id));
  return buscaEspecies;
}
module.exports = getSpeciesByIds;
