const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((animals, currentValue) => {
      // eslint-disable-next-line no-param-reassign
      animals[currentValue.name] = currentValue.residents.length;
      return animals;
    }, {});
  } if (animal.specie && animal.gender) {
    const specieAnimal = species.find((element) => animal.specie === element.name);
    const animalGender = specieAnimal.residents
      .filter((animalSex) => animalSex.sex === animal.gender);
    return animalGender.length;
  }
  const specieAnimal = species.find((element) => animal.specie === element.name);
  return specieAnimal.residents.length;
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
