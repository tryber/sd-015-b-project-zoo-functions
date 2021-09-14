const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const totalAnimals = {};
  if (!animal) {
    data.species.forEach((specie) => {
      const { name } = specie;
      const quantity = specie.residents.length;
      totalAnimals[name] = quantity;
    });
    return totalAnimals;
  }
  const selected = data.species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    const selectedSex = selected.residents.filter((resident) => resident.sex === animal.sex);
    return selectedSex.length;
  }
  return selected.residents.length;
}

module.exports = countAnimals;
