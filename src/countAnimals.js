const data = require('../data/zoo_data');

function countAnimals(species) {
  const totalAnimals = {};
  if (!species) {
    data.species.forEach((specie) => {
      const animal = specie.name;
      const quantity = specie.residents.length;
      totalAnimals[animal] = quantity;
    });
    return totalAnimals;
  }
  const selected = data.species.find((specie) => specie.name === species);
  return selected.residents.length;
}

module.exports = countAnimals;
