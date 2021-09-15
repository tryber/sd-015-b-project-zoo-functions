const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const test = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return test;
  }
  const { specie, sex } = animal;
  const busca = species.find((elemento) => elemento.name === specie);
  if (sex === undefined) {
    const numeroAnimal = busca.residents.length;
    return numeroAnimal;
  }
  const test2 = busca.residents.filter((elemento) => elemento.sex === sex);
  return test2.length;
}

module.exports = countAnimals;
