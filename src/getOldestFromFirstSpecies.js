const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(ident) {
  const especie = data.employees.find(({ id }) => id === ident).responsibleFor[0];
  const animal = data.species.find(({ id }) => id === especie).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
