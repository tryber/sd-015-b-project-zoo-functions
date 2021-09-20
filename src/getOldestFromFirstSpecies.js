const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const nameAnimals = employees.filter((employee) => (employee.id === id));
  const firstSpecie = nameAnimals.find((animal) => animal.responsibleFor).responsibleFor[0];
  const listOfSpecies = species.find((old) => old.id === firstSpecie).residents;
  const oldestAnimal = listOfSpecies.reduce((acumulator, current) =>
    ((acumulator.age > current.age) ? acumulator : current));
  const valeOfInformation = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return valeOfInformation;
}

module.exports = getOldestFromFirstSpecies;
