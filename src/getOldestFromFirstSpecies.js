const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestAnimal(animalId) {
  let oldestAnimal;
  species.forEach(({ id, residents }) => {
    if (id === animalId) {
      oldestAnimal = residents.reduce((acc, resident) => {
        console.log(acc);
        if (acc.age > residents.age) return acc;
        return resident;
      });
    }
  });
  oldestAnimal = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return oldestAnimal;
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

getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2');

module.exports = getOldestFromFirstSpecies;
