const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAllAnimals() {
  const animals = {};
  species.forEach((animal) => {
    animals[animal.name] = animal.residents.length;
  });
  return animals;
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return countAllAnimals();
  }
  if (animal.gender === undefined) {
    const specie = species.find((spec) => spec.name === animal.specie);
    return specie.residents.length;
  }
  let count = 0;
  const especie = species.find((specie1) => specie1.name === animal.specie);
  especie.residents.forEach((resident) => {
    if (resident.sex === animal.gender) {
      count += 1;
    }
  });
  return count;
}

module.exports = countAnimals;
