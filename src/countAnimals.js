const data = require('../data/zoo_data');

function countAnimals(animal) {
  let obj = {};
  if (animal) {
    obj = 0;
    const findAnimal = data.species.find((animalInfo) => animalInfo.name === animal.specie);
    if (Object.values(animal)[1] === undefined) {
      obj = findAnimal.residents.length;
    } else {
      const countAnimalsBySex = findAnimal.residents.filter((a) => a.sex === animal.gender);
      obj = countAnimalsBySex.length;
    }
  } else {
    data.species.forEach((animalInfo) => {
      obj[animalInfo.name] = animalInfo.residents.length;
    });
  }
  return obj;
}

module.exports = countAnimals;
