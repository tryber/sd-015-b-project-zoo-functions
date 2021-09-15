const { species } = require('../data/zoo_data');

function getDefaultAnimals() {
  const qntBySpecie = {};

  species.forEach(({ name, residents }) => {
    qntBySpecie[name] = residents.length;
  });

  return qntBySpecie;
}

function countAnimals(animal) {
  if (!animal) return getDefaultAnimals();

  const { residents } = species.find((specie) => specie.name === animal.specie);
  const filteredByGender = residents.filter((resident) => resident.sex === animal.sex).length;

  return (animal.sex) ? filteredByGender : residents.length;
}

module.exports = countAnimals;
