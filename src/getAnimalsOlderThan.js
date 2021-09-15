const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  const getOlder = species.find((name) => name.name === animal)
    .residents.every((aget) => aget.age > age);

  return getOlder;
}

module.exports = getAnimalsOlderThan;
