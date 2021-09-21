const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const result = {};
    species.forEach((specie) => { result[specie.name] = specie.residents.length; });
    return result;
  }
  if (Object.entries(animal).length === 1) {
    const whatAnimal = Object.values(animal).toString();
    const animalSum = species.find((findAnimal) => whatAnimal.includes(findAnimal.name));
    return animalSum.residents.length;
  }
  if (Object.entries(animal).length === 2) {
    const whatAnimal = Object.values(animal).toString();
    const animalSum = species.find((findAnimal) => whatAnimal.includes(findAnimal.name));
    const animalFilter = animalSum.residents.filter((resident) =>
      resident.sex === Object.values(animal)[1]).length;
    return animalFilter;
  }
}

module.exports = countAnimals;
