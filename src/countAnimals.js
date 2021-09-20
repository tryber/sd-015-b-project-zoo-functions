const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const withOutParameters = () =>
  species.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.residents.length;
    return accumulator;
  }, {});
function countAnimals(animal) {
  if (!animal) {
    return withOutParameters();
  } if (animal.specie && animal.sex) {
    const specieAnimal = species.find((element) => animal.specie === element.name);
    const animalGender = specieAnimal.residents
      .filter((animalSex) => animalSex.sex === animal.sex);
    return animalGender.length;
  }
  const specieAnimal = species.find((element) => animal.specie === element.name);
  return specieAnimal.residents.length;
}

module.exports = countAnimals;
