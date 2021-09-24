const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const getNamesByGeoNE = species.filter((specie) => specie.location === 'NE');
  const getNamesByGeoNW = species.filter((specie) => specie.location === 'NW');
  const getNamesByGeoSE = species.filter((specie) => specie.location === 'SE');
  const getNamesByGeoSW = species.filter((specie) => specie.location === 'SW');

  const getName = getNamesByGeoSE.map((animalName) => animalName.name);
  let obj = {
    NE: [{}],
    NW: [{}],
    SE: [{}],
    SW: [{}],
  };

  return getName;
}

const option = { includeNames: true }
console.log(getAnimalMap(option));

module.exports = getAnimalMap;
