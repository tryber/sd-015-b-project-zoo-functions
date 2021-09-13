const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.every(() => animal.age >= age);
}
// console.log(getAnimalsOlderThan(('penguins', 10)));
module.exports = getAnimalsOlderThan;
