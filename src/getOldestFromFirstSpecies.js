const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const idOfSpecie = findEmployee.responsibleFor.find((specie) => specie[0]);
  const ArrayofSpecie = data.species.find((animal) => animal.id === `${idOfSpecie}`);
  const sortArray = ArrayofSpecie.residents.sort((ObjAnimalA, ObjAnimalB) =>
    ObjAnimalB.age - ObjAnimalA.age);
  return Object.values(sortArray[0]);
}

module.exports = getOldestFromFirstSpecies;
