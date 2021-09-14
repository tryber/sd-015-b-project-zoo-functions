const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  const animals = {};
  if (!animal) {
    species.forEach((specie) => {
      const { name } = specie;
      const quantity = species.residents.length;
      animals[name] = quantity;
    });
    return animals;
  }
  const animalSelected = species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    const sexSelected = animalSelected.residents;
    sexSelected.filter((resident) => resident.sex === animal.sex);
    return sexSelected.length;
  }
  return animalSelected.residents.length;

  module.exports = countAnimals;
}
