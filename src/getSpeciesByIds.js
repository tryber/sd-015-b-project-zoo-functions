const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Os parâmetros 'ids' são mapeados e como callback do mapeamento é usado o find para encontrar todas as species que se igualarem ao id analisado.
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
