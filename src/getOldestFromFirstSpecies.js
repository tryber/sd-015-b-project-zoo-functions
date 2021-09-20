const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  function getOlderAnimal(animals) {
    const olderAnimal = animals.reduce((acc, current) => {
      let oldest = acc;
      const { age } = current;
      if (oldest < age) {
        oldest = age;
      }
      return oldest;
    }, 0);
    return olderAnimal;
  }
  const animalId = data.employees.find((ids) => ids.id === id);
  const animal = animalId.responsibleFor[0];
  const groupAnimal = data.species.find((specie) => specie.id === animal);
  const { residents } = groupAnimal;
  const oldestAnimal = residents.find((resident) => resident.age === getOlderAnimal(residents));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
