const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (!options) {
    const specieMap = () => ({
      NE: species
        .filter((specie) => specie.location === 'NE')
        .map((actualSpecie) => actualSpecie.name),
      NW: species
        .filter((specie) => specie.location === 'NW')
        .map((actualSpecie) => actualSpecie.name),
      SE: species
        .filter((specie) => specie.location === 'SE')
        .map((actualSpecie) => actualSpecie.name),
      SW: species
        .filter((specie) => specie.location === 'SW')
        .map((actualSpecie) => actualSpecie.name),
    });
    return specieMap;
  }
}

module.exports = getAnimalMap;
