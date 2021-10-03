const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return (
    species.find(({ name }) => (
      name === animal
    )).residents.every(({ age: residentAge }) => (
      residentAge >= age
    ))
  );
}

module.exports = getAnimalsOlderThan;
