const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const species = data.species.find((animals) => (animals.name === animal));
  if (species.residents.find((resident) => (resident.age < age))) {
    return false;
  } return true;
}

module.exports = getAnimalsOlderThan;
