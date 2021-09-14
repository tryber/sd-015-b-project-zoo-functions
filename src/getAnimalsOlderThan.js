const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = species.find((speciee) => speciee.name === animal);

  const checkAge = residents.every((resident) => resident.age >= age);
  return checkAge;
}

module.exports = getAnimalsOlderThan;
