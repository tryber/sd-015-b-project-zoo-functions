const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    species.forEach((kind) => { obj[kind.name] = kind.residents.length; });
    return obj;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((kind) => kind.name === animal.specie).residents.length;
  }
  return species.find((kind) => kind.name === animal.specie).residents
    .filter(({ sex }) => sex === animal.sex).length;
}

module.exports = countAnimals;
