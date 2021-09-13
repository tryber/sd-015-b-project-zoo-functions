const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const idsArray = ids; // coloquei em uma variavel para ficar visivel que é um array
  const speciesArray = idsArray.map((speciesId) => species.find(({ id }) => id === speciesId));
  return speciesArray;
}

module.exports = getSpeciesByIds;
