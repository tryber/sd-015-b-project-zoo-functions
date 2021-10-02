const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEmployee = employees.find((empId) => empId.id === id);
  const getFirstAnimalSpecieId = getEmployee.responsibleFor[0];
  const getAnimalSpecie = species.find((specieId) => specieId.id === getFirstAnimalSpecieId);
  const getAnimalsOfSpecie = getAnimalSpecie.residents;
  const getOldest = getAnimalsOfSpecie.reduce((oldest, newest) => {
    const oldestAnimal = oldest.age > newest.age ? oldest : newest;
    return oldestAnimal;
  });
  const oldestAnimalOfSpecie = [getOldest.name, getOldest.sex, getOldest.age];

  return oldestAnimalOfSpecie;
}

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = getOldestFromFirstSpecies;
