const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(...animal) {
  if (animal.length === 0) {
    const animalObj = {};
    species.forEach((eachAnimal) => { animalObj[eachAnimal.name] = eachAnimal.residents.length; });
    return animalObj;
  }

  if (animal[0].gender) {
    return species.find((specieObj) => animal[0]
      .specie === specieObj.name).residents.filter((sGender) => sGender
      .sex === animal[0].gender).length;
  }

  return species.find((animalSearch) => animalSearch.name === animal[0].specie).residents.length;
}

module.exports = countAnimals;
