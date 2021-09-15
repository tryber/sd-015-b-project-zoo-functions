const data = require('../data/zoo_data');

function findAnimals(id) {
  const animal = data.employees.find((employee) => (employee.id === id)).responsibleFor;
  return animal;
}

function getOldestFromFirstSpecies(...ids) {
  let result = [];
  ids.forEach((id) => {
    const animalId = findAnimals(id)[0];
    const animal = data.species.find((specie) => specie.id === animalId);
    const animals = animal.residents.sort((a, b) => (a.age > b.age ? 1 : -1));
    const oldest = animals[animals.length - 1];
    result = [`${oldest.name}`, `${oldest.sex}`, oldest.age];
  });
  return result;
}

module.exports = getOldestFromFirstSpecies;
