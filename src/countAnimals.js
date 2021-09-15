const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const acumulador = {};
    species.forEach((objetosResidents) => {
      acumulador[objetosResidents.name] = objetosResidents.residents.length;
    });

    return acumulador;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
