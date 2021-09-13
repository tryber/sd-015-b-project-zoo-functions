const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((especie, index) => {
    if (!ids) return [];
    if (especie.id === ids[index]) return especie;
  });
}

module.exports = getSpeciesByIds;
