const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees
    .find((name) => name.id === id).responsibleFor[0];

  const findSpecie = species
    .find((name) => name.id === findEmployee).residents;

  const order = Object.values(findSpecie
    .reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc)));

  return order;
}

getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83');
module.exports = getOldestFromFirstSpecies;
