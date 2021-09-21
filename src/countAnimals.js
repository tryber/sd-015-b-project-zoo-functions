const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    const animals = data.species;
    animals.forEach((specie) => {
      const count = specie.residents.length;
      result[`${specie.name}`] = count;
    });
    return result;
  }
  let count = 0;
  const countedAnimal = data.species.find((specie) => specie.name === animal.specie).residents;
  if (!animal.sex) {
    count = countedAnimal.length;
    return count;
  }
  count = countedAnimal.filter((specie) => specie.sex === animal.sex).length;
  console.log(count);
  return count;
}

console.log(countAnimals());

module.exports = countAnimals;
