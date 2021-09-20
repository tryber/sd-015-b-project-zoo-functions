const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const allSpecies = {};
    data.species.forEach((specie) => {
      allSpecies[specie.name] = specie.residents.length;
    });
    return allSpecies;
  }
  const animalFound = data.species.find((specie) => specie.name === animal.specie);
  const animalSelected = animalFound.residents;
  if (animal.specie !== undefined && animal.sex !== undefined) {
    const animalSex = animalSelected.filter((specie) => specie.sex === animal.sex).length;
    return animalSex;
  }
  if (animal.specie !== undefined) {
    const countAnimal = animalFound.residents.length;
    return countAnimal;
  }
}

module.exports = countAnimals;
