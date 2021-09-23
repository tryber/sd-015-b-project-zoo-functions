const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');
// fonte https://github.com/tryber/sd-015-b-project-zoo-functions/blob/annie-haurani-zoo-functions/src/getEmployeesCoverage.js
function getOldestAnimal(animalId) {
  let oldestAnimal;
  species.forEach(({ id, residents }) => {
    if (id === animalId) {
      oldestAnimal = residents.reduce((acc, resident) => {
        if (acc.age < residents.age) return acc;
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

module.exports = getOldestFromFirstSpecies;
