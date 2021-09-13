const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function onlyOne() {
  const totalCount = {};
  species.forEach((specie) => {
    totalCount[specie.name] = specie.residents.length;
  });
  return totalCount;
}

function countAnimals(...animal) {
  if (animal.length === 0) {
    return onlyOne();
  } if (Object.keys(animal[0]).length === 1) {
    const animall = species.find((especime) => especime.name === animal[0].specie);
    return animall.residents.length;
  } if (Object.keys(animal[0]).length > 1) {
    const animall = species.find((especime) => especime.name === animal[0].specie);
    const animais = animall.residents;
    const filtrado = animais.filter((animals) => animals.sex === animal[0].gender);
    return filtrado.length;
  }
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'giraffes', gender: 'female' }));
