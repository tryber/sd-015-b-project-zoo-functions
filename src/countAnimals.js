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
    const obj = {};
    for (let i = 0; i < gettingAnimals.length; i++) {
      const animal = gettingAnimals[i];
      for (j in animal) {
        obj[animal] = gettinPopularity[j];
      };
  }
  return obj
}
}

module.exports = countAnimals;

console.log(countAnimals());