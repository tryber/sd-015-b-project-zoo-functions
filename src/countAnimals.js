const { species } = require('../data/zoo_data');
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
  const contadorEspecies = species.find((specie) => specie.name === animal.specie).residents;
  if (!animal.sex) {
    count = contadorEspecies.length;
    return count;
  }
  count = contadorEspecies.filter((specie) => specie.sex === animal.sex).length;
  return count;
}

module.exports = countAnimals;
