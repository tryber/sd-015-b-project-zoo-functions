const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const specieId = ids.map((searchSpecieById) =>
    species.find((getSpecieById) =>
    getSpecieById.id === searchSpecieById
  ));

  return specieId;
};

module.exports = getSpeciesByIds;
