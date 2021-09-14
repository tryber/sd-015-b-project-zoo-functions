const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((i) => i.name === animal)
    .residents.every((resid) => resid.age > age);
}

module.exports = getAnimalsOlderThan;
