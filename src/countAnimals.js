const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.map((animais, index) => (animais.name));
  }
}

console.log(countAnimals());

module.exports = countAnimals;
