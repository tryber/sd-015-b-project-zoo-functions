const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// retorna todos os animais
const allAnimals = () => species.reduce((acc, animalData) => {
  acc[animalData.name] = animalData.residents.length;
  return acc;
}, {});

console.log(allAnimals());

// retorna todos os animais de uma especie
const allAnimalsBySpecie = (specie) => {
  const animal = species.find((animalFind) => animalFind.name === specie.specie);

  if (!specie.sex) {
    return animal.residents.length;
  }

  return animal.residents.reduce((acc, resident) => {
    if (resident.sex === specie.sex) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

function countAnimals(specie) {
  // seu código aqui
  if (!specie) {
    return allAnimals();
  }
  return allAnimalsBySpecie(specie);
}

module.exports = countAnimals;
