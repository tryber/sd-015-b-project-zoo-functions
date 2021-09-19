const data = require('../data/zoo_data');

const countAllAnimals = () => {
  const result = {};
  data.species.forEach((specie) => {
    result[`${specie.name}`] = specie.residents.length;
  });
  return result;
};

const countSpecificAnimalWithSex = (specificAnimal, animal) => {
  const specificAnimalWithSex = specificAnimal.filter((resident) => resident.sex === animal.sex);
  console.log(specificAnimalWithSex);
  return specificAnimalWithSex.length;
};

const countSpecificAnimal = (specificAnimal, animal) => {
  if (animal.sex === undefined) {
    return specificAnimal.length;
  }
  return countSpecificAnimalWithSex(specificAnimal, animal);
  // o código não foi arrumado para
};

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return countAllAnimals();
  }
  const specificAnimal = data.species.find((specie) => specie.name === animal.specie).residents;
  return countSpecificAnimal(specificAnimal, animal);
}

module.exports = countAnimals;
