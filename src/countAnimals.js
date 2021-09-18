const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const obj = {};
  if (animal === undefined) {
    species.forEach((element) => { obj[element.name] = element.residents.length; });
    return obj;
  }

  if (animal.sex) {
    return species.find((element) => element.name === animal.specie).residents
      .filter((element) => element.sex === animal.sex).length;
  }

  return species.find((element) => element.name === animal.specie).residents.length;
}

module.exports = countAnimals;
