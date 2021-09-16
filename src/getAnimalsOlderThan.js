const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ageResident) {
  return species
    .find(({ name }) => name === animal).residents
    .every(({ age }) => age >= ageResident);
}

module.exports = getAnimalsOlderThan;
