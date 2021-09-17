const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(ids) {
  const worker = data.employees.find((e) => e.id === ids);
  const currentAnimal = data.species.find((animal) => animal.id === worker.responsibleFor[0]);
  const b = currentAnimal.residents.sort((animal1, animal2) => {
    if (animal1.age > animal2.age) return 1;
    if (animal1.age < animal2.age) return -1;
    return 0;
  });
  const oldestAnimal = b[b.length - 1];
  const arr = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return arr;
}

module.exports = getOldestFromFirstSpecies;
