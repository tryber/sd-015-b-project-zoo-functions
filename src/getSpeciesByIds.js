const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids, ids2) {
  // seu código aqui
  if (!ids) return [];
  const retornoId = [];
  retornoId.push(species.find((especie) => especie.id === ids));
  if (!ids2) {
    return retornoId;
  }
  retornoId.push(species.find((especie) => especie.id === ids2));
  return retornoId;
}

module.exports = getSpeciesByIds;
