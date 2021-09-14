const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countSpecies(animal) {
  const obj = species.find((elem) => elem.name === animal.specie);
  if (animal.specie !== undefined && animal.sex === undefined) {
    return obj.residents.length;
  }
  return obj.residents.filter((elem) => elem.sex === animal.sex).length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    const obj = {};
    species.forEach((elem) => {
      obj[elem.name] = elem.residents.length;
    });
    return obj;
  }
  return countSpecies(animal);
}
module.exports = countAnimals;
