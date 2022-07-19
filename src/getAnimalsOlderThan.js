const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((anim) => anim.name === animal);
  return findAnimal.residents.every((minAge) => minAge.age >= age);
}

module.exports = getAnimalsOlderThan;
