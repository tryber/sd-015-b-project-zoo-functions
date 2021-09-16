const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const speciesObject = {};
data.species.forEach((animal) => {
  speciesObject[animal.name] = animal.residents.length;
  return speciesObject;
});

function countAnimals(animal = speciesObject) {
  if (Object.keys(speciesObject).includes(animal.specie)) {
    if (animal.sex) {
      const animalsOfSex = species.find((subject) => subject.name === animal.specie).residents;
      return animalsOfSex.filter((element) => element.sex === animal.sex).length;
    }
    return speciesObject[animal.specie];
  }
  return animal;
}

module.exports = countAnimals;
