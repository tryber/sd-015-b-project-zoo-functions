const data = require('../data/zoo_data');

const orderedAnimals = {};
const animalsNe = data.species.filter((element) => element.location === 'NE');
const animalsSe = data.species.filter((element) => element.location === 'SE');
const animalsNw = data.species.filter((element) => element.location === 'NW');
const animalsSw = data.species.filter((element) => element.location === 'SW');
orderedAnimals.NE = animalsNe.map((element) => element.name);
orderedAnimals.NW = animalsNw.map((element) => element.name);
orderedAnimals.SE = animalsSe.map((element) => element.name);
orderedAnimals.SW = animalsSw.map((element) => element.name);
// console.log(animalsNe);
function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return orderedAnimals;
  }
  if (JSON.stringify(options) === JSON.stringify({ includeNames: true })) {
    const teste = orderedAnimals.NE;
    return teste;
  }
}
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
