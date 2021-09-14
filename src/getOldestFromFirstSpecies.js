const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getOldestFromFirstSpecies = (employeeId) => {
  const [animalId] = employees.find((employee) => employee.id === employeeId).responsibleFor;
  const oldestAnimal = species
    .find((specie) => specie.id === animalId)
    .residents.reduce((oldest, resident) => (resident.age > oldest.age ? resident : oldest));

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
