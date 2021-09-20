const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const allAnimalsCounter = () => {
  const animalsCount = {};
  species.forEach((specie) => {
    animalsCount[specie.name] = specie.residents.length;
  });
  return animalsCount;
};

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return allAnimalsCounter();
  }
  if (animal.sex) {
    const searchAnimal = species.find(
      (especie) => especie.name === animal.specie,
    );
    const countAnimalBySex = searchAnimal.residents.filter(
      (nomeDosAnimais) => nomeDosAnimais.sex === animal.sex,
    ).length;
    return countAnimalBySex;
  }
  const searchAnimal = species.find((especie) => especie.name === animal.specie)
    .residents.length;

  return searchAnimal;
}

module.exports = countAnimals;
