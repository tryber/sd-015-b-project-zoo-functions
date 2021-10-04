const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((species) => species.name === animal);
  for (let i = 0; i < selectedAnimal.residents.length; i += 1) {
    if (selectedAnimal.residents[i].age < age) {
      return false;
    }
  }
  return true;
}

module.exports = getAnimalsOlderThan;
