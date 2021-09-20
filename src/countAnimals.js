const data = require('../data/zoo_data');

const array = {};
data.species.forEach((one) => {
  array[one.name] = one.residents.length;
});

function countAnimals(animal = '') {
  // seu código aqui;
  const filteredSpecie = data.species.filter((specie) => specie.name === animal.specie);

  if (filteredSpecie.length > 0 && animal.sex === undefined) {
    return filteredSpecie[0].residents.length;
  }

  if (animal.sex) {
    const gender = filteredSpecie[0].residents.filter((resident) => resident.sex === animal.sex);
    return gender.length;
  }

  return array;
}

module.exports = countAnimals;
