const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(identifier) {
  let animalIdentifier = '';
  employees.forEach(({ id, responsibleFor }) => {
    if (id === identifier) {
      const [animalId] = responsibleFor;
      animalIdentifier = animalId;
    }
  });
  console.log(animalIdentifier);
}

getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2')

module.exports = getOldestFromFirstSpecies;
