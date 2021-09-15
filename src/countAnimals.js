const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const name = species.reduce((acc, interado) => {
      acc[interado.name] = interado.residents.length;
      return acc;
    }, {});
    return name;
  }

  const nameSpecie = species.find(({ name }) => name === animal.specie);
  const { residents } = nameSpecie;
  const residentSex = residents.filter(({ sex }) => sex === animal.sex);

  return (animal.sex) ? residentSex.length : residents.length;
}

module.exports = countAnimals;
