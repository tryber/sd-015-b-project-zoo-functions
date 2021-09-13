const data = require('../data/zoo_data');

function getSpeciesByIds(ids, id2) {
  const result = [];
  if (!ids) return result;
  result.push(data.species.find((specie) => specie.id === ids));
  if (id2) {
    result.push(data.species.find((specie) => specie.id === id2));
  }
  return result;
}

module.exports = getSpeciesByIds;
