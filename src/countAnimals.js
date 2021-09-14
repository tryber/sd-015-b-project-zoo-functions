const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce(
      (acc, current) => ({ ...acc, [current.name]: current.residents.length }),
      {},
    );
  }
  if (animal.specie && animal.gender) {
    const genderAnimal = species
      .find((element) => element.name === animal.specie)
      .residents.filter((element) => element.sex === animal.gender);
    return genderAnimal.length;
  }
  const animalObject = species.find(
    (element) => element.name === animal.specie,
  ).residents;
  return animalObject.length;
}

module.exports = countAnimals;
