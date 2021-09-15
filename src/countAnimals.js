const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // caso n seja passado nenhum parametro
  if (!animal) {
    const resultado = {};
    species.forEach((element) => {
      const { name } = element;
      const amount = element.residents.length;
      resultado[name] = amount;
    });
    return resultado;
  }
  // desestruturando  o parametro para usar dados individuais
  const { specie, sex } = animal;
  if (!sex) {
    const animalsFounded = species.find((animals1) => (animals1.name === specie));
    return animalsFounded.residents.length;
  }
  const findAnimalByGender = species.find((animals2) => (animals2.name === specie));
  return findAnimalByGender.residents.filter((animals3) => animals3.sex === sex).length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
