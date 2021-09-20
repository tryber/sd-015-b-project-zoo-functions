const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const allAnimalsCounter = () => {
  const animalsCounter = {};
  species.forEach((specie) => {
    er[specie.name] = specie.residents.length;
  });
  return er;
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
