const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const allAnimals = {};
  let count = 0;
  if (!animal) {
    species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });
    return allAnimals;
  }
  const currAnimal = species.find((element) => element.name === animal.specie);
  if (!animal.sex) {
    count = currAnimal.residents.length;
    return count;
  }
  count = currAnimal.residents.filter((element) => element.sex === animal.sex).length;
  return count;
}
module.exports = countAnimals;
