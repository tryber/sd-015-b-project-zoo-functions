const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const argumentUndefined = () => {
  const totalAnimals = {};

  species.forEach((animalName) => {
    totalAnimals[`${ animalName.name }`] = animalName.residents.length;
  });

  return totalAnimals;
}

const quantAnimals = (animal) => {
  const totalAnimals = species.find((animalName) => animalName.name === animal.specie);
  return totalAnimals.residents.length;
}

const quantAnimalsBySex = (animal) => {
  const totalAnimals = species.find((animalName) => animalName.name === animal.specie);
  const animalsBySex = totalAnimals.residents.filter((specie) => specie.sex === animal.gender);
  return animalsBySex.length;
}

function countAnimals(animal) {

  if (animal === undefined) return argumentUndefined();
  if (animal.gender === undefined) return quantAnimals(animal);
  return quantAnimalsBySex(animal);
}

module.exports = countAnimals;
