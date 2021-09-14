const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeName = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = data.species.find((kind) => kind.id === employeeName).residents;
  return Object.values(oldestAnimal.reduce((acumulator, curent) => ((acumulator.age < curent.age) ? curent : acumulator)));
}

module.exports = getOldestFromFirstSpecies;
