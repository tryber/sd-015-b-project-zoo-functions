const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const allCountAnimals = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});

    return allCountAnimals;
  }

  if (animal.gender === undefined) {
    const amountAnimals = species.find((specie) => specie.name === animal.specie);

    return amountAnimals.residents.length;
  }
  const amountAnimals = species.find((specie) => specie.name === animal.specie);
  const amountSexAnimals = amountAnimals.residents;
  const whichAnimalSex = amountSexAnimals.filter((animalSex) => animalSex.sex === animal.gender);
  return whichAnimalSex.length;
}

module.exports = countAnimals;
