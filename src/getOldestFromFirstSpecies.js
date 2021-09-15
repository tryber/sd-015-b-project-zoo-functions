const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  return employees.find((element) => element).responsibleFor;
}
console.log(getOldestFromFirstSpecies());

module.exports = getOldestFromFirstSpecies;
