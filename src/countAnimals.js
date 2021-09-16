const data = require('../data/zoo_data');

const animals = (animal) => animal.reduce((acc, curr) => {
  acc[curr.name] = curr.residents.length;
  return acc;
}, {});
// ref.: consulta: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/denis-jonathan-zoo-functions-project/src/countAnimals.js

function countAnimals(animal) {
  if (!animal) return animals(data.species); // diferente de animal

  const { residents } = data.species.find((specie) => specie.name === animal.specie);

  return (!animal.sex) ? residents.length
    : residents.filter((name) => name.sex === animal.sex).length;
}

module.exports = countAnimals;
