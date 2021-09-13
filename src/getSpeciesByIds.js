const data = require('../data/zoo_data');

function getSpeciesByIds(id1, id2) {
  return data.species.filter((animals) => animals.id === id1 || animals.id === id2);
}

module.exports = getSpeciesByIds;
