const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find((specie) => (specie.name === animal));
  const filterByAge = residents.every((resident) => resident.age >= age);
  console.log(residents);
  return filterByAge;
}

module.exports = getAnimalsOlderThan;
