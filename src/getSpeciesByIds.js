const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const specieId = ids.map((searchById) => species.find((getById) => getById.id === searchById));

  return specieId;
}

module.exports = getSpeciesByIds;
