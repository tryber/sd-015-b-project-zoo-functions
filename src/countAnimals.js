const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const expected = {};
    species.forEach((specie, index) => {
      console.log(specie, index);
    });
    console.log(expected);
  }
  // const filteredSpecie = species.filter((specie) => specie.name === animal.specie);
  // return filteredSpecie[0].residents.length;
}

module.exports = countAnimals;
