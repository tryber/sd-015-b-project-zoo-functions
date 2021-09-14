const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animals) {
  // seu código aqui
  const specieAnimals = {};
  species.forEach((specie) => { specieAnimals[specie.name] = specie.residents.length });

  if (!animals) {
    return specieAnimals;

  } return species.find((specie) => specie.name === specieAnimals).residents.length;
}
console.log(countAnimals({ specie: 'giraffes' }));

module.exports = countAnimals;
