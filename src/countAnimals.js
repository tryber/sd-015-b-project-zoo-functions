const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, actualAnimal) => {
      acc[actualAnimal.name] = actualAnimal.residents.length;
      return acc;
    }, {});
  }
  const findArrayOfAnimal = [];
  const StrAnimal = Object.values(animal);
  const ObjAnimal = data.species.find((specificAnimal) => specificAnimal.name === StrAnimal[0]);
  findArrayOfAnimal.push(ObjAnimal);
  const quantityResid = findArrayOfAnimal.map((specificAnimal) => specificAnimal.residents.length);
  const result = quantityResid[0];
  if (StrAnimal[1] !== undefined) {
    return (ObjAnimal.residents.filter((specificAnimal) =>
      specificAnimal.sex === StrAnimal[1])).length;
  }

  return result;
}

module.exports = countAnimals;
