const data = require('../data/zoo_data');

const { species } = data;

function mapeamentoDeNome(location) {
  return species.filter((specie) => specie.location === location).map(({ name }) => name);
}

function getAnimalMap(options) {
  // const animalsLocation = {};
  // // animalsLocation.map((location) => locations) = species.filter((specie) => specie.location === locationsSpecies[1]);

  // return locations;
}

console.log(mapeamentoDeNome());

module.exports = getAnimalMap;
