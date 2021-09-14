const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // finding specie
  if (animal === undefined) {
    // encontrando todos animais
    const gettingAnimals = species.map((elemento) => elemento.name);
    // recolhendo a popularity
    const gettinPopularity = species.map((elemento) => elemento.popularity);
    // juntando os dois resultados
  }

}

module.exports = countAnimals;

console.log(countAnimals());