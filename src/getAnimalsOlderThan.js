const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((object) => object.name === animal);
  if (specie.residents.find((resident) => resident.age <= age)) {
    return false;
  }
  return true;
}

module.exports = getAnimalsOlderThan;
