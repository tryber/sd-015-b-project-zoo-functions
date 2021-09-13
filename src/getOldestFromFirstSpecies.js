const data = require('../data/zoo_data');

const specieId = (id) => data.employees.find(({ id: employeeId }) => (
  id === employeeId
)).responsibleFor[0];

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findAnimalId = specieId(id);

  const oldestAnimal = data.species.find(({ id: animalId }) => animalId === findAnimalId);

  const [{ name, sex, age }] = oldestAnimal.residents.sort((a, b) => b.age - a.age);

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
