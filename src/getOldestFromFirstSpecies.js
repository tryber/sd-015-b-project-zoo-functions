const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animal = (idAnimal) => species.find((specie) => specie.id === idAnimal);
const infoAnimal = (info) => info.residents
  .reduce((acc, resident) => (acc.age > resident.age ? acc : resident));
const arrInfoAnimal = (oldestAnimal) => Object.values(oldestAnimal);

function getOldestFromFirstSpecies(id) {
  const animalsOfEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const objAnimal = animal(animalsOfEmployee);
  const oldAnimal = infoAnimal(objAnimal);
  const treatedAnimal = arrInfoAnimal(oldAnimal);
  return treatedAnimal;
}
module.exports = getOldestFromFirstSpecies;
