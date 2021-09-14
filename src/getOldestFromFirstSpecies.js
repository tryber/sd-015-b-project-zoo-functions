const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getOldestAnimal = (specieId) => {
  const foundSpecie = species.find((specie) => specie.id === specieId);
  const { residents } = foundSpecie;

  const animal = residents.reduce((oldest, resident) => {
    if (oldest.age > resident.age) {
      return oldest;
    }
    return resident;
  });

  return animal;
};

const getEmployeeById = (employeeId) => {
  const employeeFound = employees.find((employee) => employee.id === employeeId);
  return employeeFound;
};

function getOldestFromFirstSpecies(id) {
  const employee = getEmployeeById(id);
  const [firstSpecieId] = employee.responsibleFor;
  const oldestAnimal = getOldestAnimal(firstSpecieId);

  return oldestAnimal;
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
