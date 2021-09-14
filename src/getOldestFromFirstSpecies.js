const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  let oldestAnimal = { age: 0 };
  const employee = employees.find((element) => element.id === id);
  const animalId = employee.responsibleFor[0];
  const getAnimal = species.find((animal) => animal.id === animalId);
  getAnimal.residents.forEach((element) => {
    if (element.age > oldestAnimal.age) {
      oldestAnimal = element;
    }
  });
  return Object.values(oldestAnimal);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
