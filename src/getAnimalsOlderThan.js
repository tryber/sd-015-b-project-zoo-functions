const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const kind = data.species.filter((species) => species.name === animal);
  return kind[0].residents.every((species) => species.age > age);
}

module.exports = getAnimalsOlderThan;
