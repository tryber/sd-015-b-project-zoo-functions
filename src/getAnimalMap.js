const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function searchAnimal() {
  const regions = {};

  species.forEach((specie) => {
    if (!regions[specie.location]) regions[specie.location] = [];
    regions[specie.location].push(specie.name);
  });
  return regions;
}

function getAnimalMap(options) {
  if (!options) return searchAnimal();
}
console.log(getAnimalMap());

module.exports = getAnimalMap;
