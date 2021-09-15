const data = require('../data/zoo_data');

const defaultAnimals = (animals) => animals.reduce((accumulator, current) => {
  accumulator[current.name] = current.residents.length;
  return accumulator;
}, {});

function countAnimals(animal) {
  if (!animal) return defaultAnimals(data.species);

  const { residents } = data.species.find((specie) => specie.name === animal.specie);

  return (!animal.sex)
    ? residents.length : residents.filter((name) => name.sex === animal.gender).length;
}

module.exports = countAnimals;
