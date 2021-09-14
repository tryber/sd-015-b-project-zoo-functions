const { species } = require('../data/zoo_data');

function defaultAnimals() {
  const output = {};

  species.forEach(({ name, residents }) => {
    output[name] = residents.length;
  });

  return output;
}

function countAnimals(animal) {
  if (!animal) return defaultAnimals();

  const { residents } = species.find((specie) => specie.name === animal.specie);
  const filteredByGender = residents.filter((resident) => resident.sex === animal.gender).length;

  return (animal.gender) ? filteredByGender : residents.length;
}

module.exports = countAnimals;
