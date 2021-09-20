const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
//
function getAnimalsOlderThan(animal, ageAnimal) {
  return species.find((element) => animal === element.name).residents
    .every((element) => element.age > ageAnimal);
}
module.exports = getAnimalsOlderThan;
