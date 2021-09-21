const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findemployee = (employee) => employee.id === id;
  const foundEmployee = employees.find(findemployee);
  const firstSpecie = foundEmployee.responsibleFor[0];
  const elderAnimal = species.find((specie) => specie.id === firstSpecie)
    .residents.reduce((elder, resident) => {
      if (resident.age > elder.age) {
        return resident;
      }
      return elder;
    });
  const animalArray = [elderAnimal.name, elderAnimal.sex, elderAnimal.age];
  return animalArray;
}

module.exports = getOldestFromFirstSpecies;
