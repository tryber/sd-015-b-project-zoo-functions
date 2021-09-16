const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, actualAnimal) => {
      acc[actualAnimal.name] = actualAnimal.residents.length;
      return acc;
    }, {});
  }
  const StrAnimal = Object.values(animal);
  const ObjAnimal = data.species.find((specificAnimal) => specificAnimal.name === StrAnimal[0]);
  if (StrAnimal[1] !== undefined) {
    return (ObjAnimal.residents.filter((specificAnimal) =>
      specificAnimal.sex === StrAnimal[1])).length;
  }

  return ObjAnimal.residents.length;
}

module.exports = countAnimals;
