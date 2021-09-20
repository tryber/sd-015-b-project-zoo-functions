const data = require('../data/zoo_data');

const { species } = data;

const countAllAnimals = () => {
  const animalsCount = {};

  species.forEach((specie) => {
    const numberOfAnimals = specie.residents.length;
    const { name } = specie;

    animalsCount[name] = numberOfAnimals;
  });

  return animalsCount;
};

const countAnimalsBySex = (animals, sex) => {
  const numberOfAnimals = animals.filter((animal) => animal.sex === sex);

  return numberOfAnimals.length;
};

function countAnimals(animal) {
  if (!animal) return countAllAnimals();

  const animalFound = species.find((specie) => specie.name === animal.specie);

  const { residents } = animalFound;
  let numberOfAnimals;

  if (animal.sex) {
    numberOfAnimals = countAnimalsBySex(residents, animal.sex);
  } else {
    numberOfAnimals = residents.length;
  }

  return numberOfAnimals;
}

module.exports = countAnimals;
