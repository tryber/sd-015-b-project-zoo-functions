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




function noOptions(local) {
  return data.species.filter(({ location }) => local === location)
    .map(({ name }) => name);
}

function getAnimalMap(options) {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((specie) => {
    locations[specie.location] = checkOptions(options, specie.location);
  });
  return locations;
}