const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
    const nameAnimal = data.species.find((animalSpecie) => animalSpecie.name === animal);
    return nameAnimal.residents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
