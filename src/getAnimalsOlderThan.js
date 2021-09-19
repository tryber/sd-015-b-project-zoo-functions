const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((specie) =>
    specie.name === animal).residents.map((resident) =>
    resident.age > age).reduce((acc, actual) =>
    (!(acc === false || actual === false)));
}
//  false true true false
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
