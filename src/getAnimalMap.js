const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function makeObjectWithoutParameters() {
  const cardinalDirections = {};

  species.forEach((specie) => {
    if (!cardinalDirections[specie.location]) cardinalDirections[specie.location] = [];

    cardinalDirections[specie.location].push(specie.name);
  });
  return cardinalDirections;
}
function getAnimalMap(options) {
  if (!options) return makeObjectWithoutParameters();
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
