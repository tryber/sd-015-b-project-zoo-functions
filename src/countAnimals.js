const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function createObj() {
  const obj = {};
  species.forEach((element, index) => {
    obj[element.name] = element.residents.length;
  });
  return obj;
}

function hasSex(animal) {
  const { specie } = animal;
  const { sex } = animal;
  const animalSex = species.find((animalName) => animalName.name === specie);
  const residents1 = animalSex.residents;
  const arraySex = residents1.filter((e) => e.sex === sex);
  return arraySex.length;
}

function verify(animal) {
  const { specie } = animal;
  const { sex } = animal;
  if (sex !== undefined) {
    return hasSex(animal);
  }
  const findAnimalName = species.find((animalName) => animalName.name === specie);
  return findAnimalName.residents.length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return createObj();
  }
  return verify(animal);
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
