const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const todos = {};
    species.forEach((especie) => {
      todos[especie.name] = especie.residents.length;
    });
    return todos;
  }
  if (animal.sex) {
    const animais = species.find(({ name }) => name === animal.specie)
      .residents.filter(((especie) => especie.sex === animal.sex));
    return animais.length;
  }
  const animais = species.find(({ name }) => name === animal.specie);
  return animais.residents.length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
