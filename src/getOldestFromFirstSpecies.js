const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeFirstAnimal = employees.filter((element) => element.id.includes(id));
  const filterFirstAnimal = employeeFirstAnimal[0].responsibleFor.shift();
  const animalValues = species.filter((element) => element.id.includes(filterFirstAnimal));
  const oldestAnimal = animalValues[0].residents.reduce((acumulator, element) => {
    if (element.age > acumulator.age) return element;
    else {
      return acumulator;
    }  
    });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
