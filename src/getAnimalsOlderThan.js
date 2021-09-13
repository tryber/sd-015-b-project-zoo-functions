const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((Animal) => Animal.name === animal && Animal.residents.age >= age);
}
console.log(getAnimalsOlderThan('lions', 14));
module.exports = getAnimalsOlderThan;
