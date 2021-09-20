const data = require('../data/zoo_data');

const getOldest = (animals) => {
  animals.sort((animalA, animalB) => animalB.age - animalA.age);
  return animals[0];
};

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((idToFind) => idToFind.id === id);
  const animals = data.species.find((idToFind) => idToFind.id === employee.responsibleFor[0]);
  const oldest = getOldest(animals.residents);
  const result = [oldest.name, oldest.sex, oldest.age];
  return result;
}

module.exports = getOldestFromFirstSpecies;
