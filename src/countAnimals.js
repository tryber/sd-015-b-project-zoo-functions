const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach((specie) => {
      result[`${specie.name}`] = specie.residents.length;
    });

    return result;
  }

  if (animal.specie && animal.gender) {
    return species.find((specie) =>
      specie.name === animal.specie).residents.filter((resident) =>
      resident.sex === animal.gender).length;
  }

  if (animal.specie) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
}

module.exports = countAnimals;
