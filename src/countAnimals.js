const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const acumulador = {};
    species.forEach((objetosResidents) => {
      acumulador[objetosResidents.name] = objetosResidents.residents.length;
    });
    return acumulador;
  } if (animal.gender) {
    return species.find(({ name }) => name === animal.specie).residents
      .filter((elemento) => elemento.sex === animal.gender).length;
  } if (animal) {
    const comparandoNomes = species.find((objResidents) => objResidents.name === animal.specie);
    return comparandoNomes.residents.length;
  }
}

console.log(countAnimals({ specie: 'elephants', gender: 'male' }));

module.exports = countAnimals;
