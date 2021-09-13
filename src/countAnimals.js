const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return list
  } return list[animal.specie]
  const number = list[animal.specie]  
} 

// function listWithGender () => {}

const list = {
  'lions': 4,
  'tigers': 2,
  'bears': 3,
  'penguins': 4,
  'otters': 4,
  'frogs': 2,
  'snakes': 2,
  'elephants': 4,
  'giraffes': 6,
};

const species = data.species;
let maleSpecies = {}
maleSpecies = species.forEach((element) => maleSpecies);
// maleSpecies.element.name = element.residents.reduce((acc, element) => {
//   if (element.sex === 'male') {
//     acc + 1
//   }
// })
// })
console.log(maleSpecies);

module.exports = countAnimals;
