const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(identification) {
  // seu código aqui
  const findEmployee = data.employees.find(({ id }) => id === identification).responsibleFor[0];
  const findSpecie = data.species.find(({ id }) => id === findEmployee).residents
    .sort((a, b) => b.age - a.age).find((value) => value);
  return Object.values(findSpecie);
}

module.exports = getOldestFromFirstSpecies;
