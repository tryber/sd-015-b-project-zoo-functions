const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestAnimal = (oldest, animal) => {
  if (animal.age > oldest.age) return animal;
  return oldest;
};
const getEmployee = (id) => employees.find((employee) => employee.id === id);
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeObj = getEmployee(id);
  const responsible = employeeObj.responsibleFor;
  const firstSpecie = responsible.find((respo) => species.find((animal) => animal.id === respo));
  const animalObj = species.find((animal) => animal.id === firstSpecie);
  const oldestAnimal = animalObj.residents.reduce(getOldestAnimal);

  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
