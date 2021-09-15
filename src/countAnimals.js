const data = require('../data/zoo_data');

function returnList() {
  const animals = {};
  data.species.forEach((element) => { animals[element.name] = element.residents.length; });
  return animals;
}

function animalsCount(animal) {
  const animalCount = data.species.find((element) => element.name === animal.specie);
  if (animal && !animal.sex) return animalCount.residents.length;
  let count = 0;
  animalCount.residents.forEach((element) => { if (element.sex === animal.sex) count += 1; });
  if (animal) return count;
}

function countAnimals(animal) {
  if (!animal) return returnList();
  return animalsCount(animal);
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
