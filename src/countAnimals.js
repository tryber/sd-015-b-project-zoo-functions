const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Se o parâmetro 'animal' não for passado pra função, ela vai contabilizar o length de todos os species.residents e retornar dentro de um objeto.

const animalsCounter = () => species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

const residentsFinder = (animalName) => species
  .find((specie) => specie.name === (animalName.specie)).residents;

const genderFilter = (animalName) => residentsFinder(animalName)
  .filter((residents) => residents.sex === (animalName.sex));

function countAnimals(animal) {
  if (!animal) {
    return animalsCounter();
  }
  return animal.sex
    ? genderFilter(animal).length
    : residentsFinder(animal).length;
}

module.exports = countAnimals;
