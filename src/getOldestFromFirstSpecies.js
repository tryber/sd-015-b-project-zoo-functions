const { species, employees } = require('../data/zoo_data');

const getAnimalsOld = (idAnimal) => species.find((animal) => animal.id === idAnimal).residents
  .reduce(((accumulator, initialValue) => {
    if (initialValue.age > accumulator.age) return initialValue;
    return accumulator;
  }));

// getAnimalsOld('0938aa23-f153-4937-9f88-4858b24d6bce')

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  return Object.values(getAnimalsOld(employees
    .find((employee) => employee.id === id).responsibleFor[0]));
}

module.exports = getOldestFromFirstSpecies;
