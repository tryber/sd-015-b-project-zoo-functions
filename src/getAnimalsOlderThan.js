const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((animals) => (animals.name === animal));
  const checkAge = ((ages) => ages.age >= age);
  return findAnimal.residents.every(checkAge);
}
module.exports = getAnimalsOlderThan;
