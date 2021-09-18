const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const defaultAnimalsListCounter = (specie) => specie.reduce((acc, curr) => {
  acc[curr.name] = curr.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (!animal) return defaultAnimalsListCounter(species);

  const residentsListCounter = species.find((specie) => specie.name === animal.specie);

  return (!animal.sex) ? residentsListCounter.residents.length
    : residentsListCounter.residents.filter((specie) => specie.sex === animal.sex).length;
}

module.exports = countAnimals;
