const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (typeof ids === 'undefined') {
    return [];
  }
  return data.species.filter((animal) => ids === data.species.id);
}

module.exports = getSpeciesByIds;
