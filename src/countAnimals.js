const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = data.species.reduce((accumulator, specieAnimal) => {
      accumulator[specieAnimal.name] = specieAnimal.residents.length;
      return accumulator;
    }, {});
    return animals;
  }
  const { specie, gender } = animal;
  const animalSpecie = data.species.find((element) => element.name === specie);
  if (Object.keys(animal).includes('specie') && Object.keys(animal).includes('sex')) {
    const genderAnimals = animalSpecie.residents.filter((element) => element.sex === gender);
    return genderAnimals.length;
  }
  return animalSpecie.residents.length;
}

module.exports = countAnimals;
