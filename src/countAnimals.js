const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, atual) => {
      acc[atual.name] = atual.residents.length;
      return acc;
    }, {});
  }
  const { residents } = species.find((animals) => animals.name === animal.specie);
  const genderQuantity = residents.filter((resident) => resident.sex === animal.gender).length;

  return (animal.gender) ? genderQuantity : residents.length;
}

module.exports = countAnimals;
