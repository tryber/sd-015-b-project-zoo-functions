const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  let count = 0;
  if (!animal) {
    const result = {};
    species.forEach((specie) => {
      count = specie.residents.length;
      result[`${specie.name}`] = count;
    });
    return result;
  }
  const findAnimal = species.find((i) => i.name === animal.specie).residents;
  if (!animal.sex) {
    count = findAnimal.length;
    return count;
  }
  count = findAnimal.filter((j) => j.sex === animal.sex).length;
  return count;
}

module.exports = countAnimals;
