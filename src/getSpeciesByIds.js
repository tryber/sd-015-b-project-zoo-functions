const data = require('../data/zoo_data');

const speciesByIds = (species, ids) =>
  ids.map((id) =>
    species.find((specie) =>
    specie.id === id));

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  let result = [];
  if (ids[0] !== undefined) {
    result = speciesByIds(data.species, ids);
  }
  return result;
};

module.exports = getSpeciesByIds;
