const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const acumulador = {};
    species.forEach((objetosResidents) => {
      acumulador[objetosResidents.name] = objetosResidents.residents.length;
    });
    return acumulador;
  } if (animal.sex) {
    return species.find(({ name }) => name === animal.specie).residents
      .filter((elemento) => elemento.sex === animal.sex).length;
  } if (animal) {
    const comparandoNomes = species.find((objResidents) => objResidents.name === animal.specie);
    return comparandoNomes.residents.length;
  }
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
