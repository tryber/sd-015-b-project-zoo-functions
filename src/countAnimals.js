const { species } = require('../data/zoo_data');

const defaultAnimals = (animals) => animals.reduce((accumulator, current) => {
  accumulator[current.name] = current.residents.length;
  return accumulator;
}, {});

function countAnimals(animal) {
  if (!animal) return defaultAnimals(species);

  const { residents } = species.find((specie) => specie.name === animal.specie);

  return (!animal.gender)
    ? residents.length : residents.filter((name) => name.sex === animal.gender).length;
}

module.exports = countAnimals;
