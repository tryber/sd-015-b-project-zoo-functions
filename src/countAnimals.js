const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalsObj = {};
  if (!animal) {
    data.species.forEach((specie) => {
      const { name } = specie;
      const quantity = specie.residents.length;
      animalsObj[name] = quantity;
    });
    return animalsObj;
  }

  const selectedSpecie = data.species.find((specie) => specie.name === animal.specie);

  if (animal.gender) {
    const gender = selectedSpecie.residents.filter((resident) => resident.sex === animal.gender);
    return gender.length;
  }

  return selectedSpecie.residents.length;
}

module.exports = countAnimals;
