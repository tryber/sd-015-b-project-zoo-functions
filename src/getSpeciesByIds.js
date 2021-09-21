const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const foundSpecies = species.filter((element) => ids.includes(element.id));
  return foundSpecies;
}
module.exports = getSpeciesByIds;
