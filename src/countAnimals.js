const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countEmpty() {
  const list = {};
  species.map((specie) => {
    list[specie.name] = specie.residents.length;
    return list;
  });
  return list;
}

function countSpecies({ specie: animal }) {
  let count = 0;
  species.map((value) => {
    if (value.name === animal) {
      count = value.residents.length;
    }
    return count;
  });
  return count;
}

function countGenderSpecies({ specie: animal, gender: sex }) {
  const animals = species.find((specie) => specie.name === animal);
  const gender = animals.residents.filter((element) => element.sex === sex);
  return gender.length;
}

function countAnimals(...argument) {
  // seu código aqui
  if (!argument[0]) {
    return countEmpty();
  }

  if (Object.keys(argument[0]).length === 1) {
    return countSpecies(argument[0]);
  }

  return countGenderSpecies(argument[0]);
}
module.exports = countAnimals;

console.log(countGenderSpecies({ specie: 'elephants', gender: 'male' }));
