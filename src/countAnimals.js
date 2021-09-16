const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objtAnimals = {};
species.forEach((specie) => {
  const keyAnimal = specie.name;
  const qtdAnimal = specie.residents.length;
  objtAnimals[keyAnimal] = qtdAnimal;
});

const getNumberOfAnimals = (animal) => {
  const objtParameter = Object.values(animal);
  const numberOfSpecie = species.find((specie) => specie.name === objtParameter[0])
    .residents.length;
  return numberOfSpecie;
};
const getNumberForSexy = (animal) => {
  const objtParameter = Object.values(animal);
  const objectSpecie = species.find((specie) => specie.name === objtParameter[0]).residents;
  const verifySexy = objectSpecie.filter((infoAnimal) =>
    infoAnimal.sex === objtParameter[1]).length;
  return verifySexy;
};

function countAnimals(animal) {
  if (animal === undefined) return objtAnimals;
  if (!animal.sex) {
    const numberForSpecie = getNumberOfAnimals(animal);
    return numberForSpecie;
  }
  const numberForSex = getNumberForSexy(animal);
  return numberForSex;
}

module.exports = countAnimals;
