const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.filter((spc) => spc.name === animal)[0].residents
    .filter((res) => res.age > age).length === data.species
    .filter((spc) => spc.name === animal)[0].residents.length;
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
