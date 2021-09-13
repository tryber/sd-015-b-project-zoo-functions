const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const output = {};
    species.forEach(({ name, residents }) => {
      output[name] = residents.length;
    });
    return output;
  }

  if (animal.gender) {
    return species.find(({ name }) => name === animal.specie).residents
      .filter((element) => element.sex === animal.gender).length;
  }

  const output = species.find(({ name }) => name === animal.specie);

  return output.residents.length;
}

module.exports = countAnimals;
