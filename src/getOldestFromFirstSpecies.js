const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function old(residents) {
  const oldestAnimal = residents.reduce((acc, resident) => {
    if (acc.age >= resident.age) return acc;
    return resident;
  });
  return oldestAnimal;
}
function getOldestAnimal(animalId) {
  let oldestAnimal;
  species.forEach(({ id, residents }) => {
    if (id === animalId) {
      oldestAnimal = old(residents);
    }
  });
  return Object.values(oldestAnimal);
}

function getOldestFromFirstSpecies(identifier) {
  let animalIdentifier = '';
  employees.forEach(({ id, responsibleFor }) => {
    if (id === identifier) {
      const [animalId] = responsibleFor;
      animalIdentifier = animalId;
    }
  });
  return getOldestAnimal(animalIdentifier);
}

module.exports = getOldestFromFirstSpecies;
