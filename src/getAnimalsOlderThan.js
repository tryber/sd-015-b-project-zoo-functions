const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species: speciee } = data;
  const animals = speciee.find((specie) => (specie.name === animal));
  const verifyAge = animals.residents.every((resident) => resident.age > age);
  return verifyAge;
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
