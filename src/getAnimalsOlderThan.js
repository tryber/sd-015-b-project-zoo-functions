const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalsArray = data.species.find(specie => specie.name === animal);
  return animalsArray.residents.every(ages => ages.age > age);
}

module.exports = getAnimalsOlderThan;
