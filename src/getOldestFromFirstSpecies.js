const data = require('../data/zoo_data');

const { species, employees } = data;

const reduceFunc = (acc, animal) => ((animal.age > acc.age) ? animal : acc);

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const filteredEmployee = employees.filter((employee) => employee.id === id);
  const animalId = filteredEmployee[0].responsibleFor[0];
  const filteredSpecies = species.filter((specie) => specie.id === animalId);
  const oldAnimal = filteredSpecies[0].residents.reduce(reduceFunc);

  return [oldAnimal.name, oldAnimal.sex, oldAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
