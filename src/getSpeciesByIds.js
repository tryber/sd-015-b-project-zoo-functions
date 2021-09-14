const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) return [];
  if (typeof ids === 'object') return data.species.filter((specie) => ids.includes(specie.id));
  return data.species.find((specie) => specie.id === ids);
};

module.exports = getSpeciesByIds;
