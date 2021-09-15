const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesLocation() {
  const cardinalPoints = [];
  species.forEach(({ location }) => cardinalPoints.push(location));
  const speciesLocation = {};
  cardinalPoints.forEach((point) => {
    speciesLocation[point] = species
      .filter(({ location }) => location === point)
      .map(({ name }) => name);
  });
  return speciesLocation;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return getSpeciesLocation();
  }
}

// console.log(getAnimalMap());

module.exports = getAnimalMap;
