const data = require('../data/zoo_data');

// Const Animal acha o animal que foi passado no parametro //
const getAnimalsOlderThan = (animal, age) => {
  const animalSpecie = data.species.find((kind) => kind.name === animal);
  return animalSpecie.residents.every((ageAnimal) => ageAnimal.age > age);
};

module.exports = getAnimalsOlderThan;
