const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }

  const bichos = species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    return bichos.residents.filter((bicho) => bicho.sex === animal.sex).length;
  }
  return bichos.residents.length;
}

module.exports = countAnimals;
