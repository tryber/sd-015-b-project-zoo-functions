const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = [];
  for (let i = 0; i < species.length; i += 1) {
    if (species[i].name === animal) {
      species[i].residents.forEach((element) => {
        animals.push(element.age);
      });
    }
  }
  return animals.every((element) => element >= age);
}
module.exports = getAnimalsOlderThan;
