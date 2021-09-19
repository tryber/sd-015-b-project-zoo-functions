const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // pega a primeira especie listada
  const animalSpecie = data.species.find((specie) => specie.name === animal);

  // verifica se todos animais da mesma especie tem idade > = resident.age
  return animalSpecie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;