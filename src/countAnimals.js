const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const list = {};
    species.forEach((element) => {
      list[element.name] = element.residents.length;
    });
    return list;
  }
}

const test = countAnimals();
console.log(test);

// const species = data.species;
// let maleSpecies = {}
// maleSpecies = species.forEach((element) => maleSpecies);
// maleSpecies.element.name = element.residents.reduce((acc, element) => {
//   if (element.sex === 'male') {
//     acc + 1
//   }
// })
// })

module.exports = countAnimals;
