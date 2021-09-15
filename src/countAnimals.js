const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const amount = {};
    species.forEach((specie) => {
      amount[specie.name] = specie.residents.length;
    });
    return amount;
  }
  const animalName = species
    .find((specieName) => specieName.name === animal.specie);

  if (animal.sex) {
    const animalGender = animalName.residents
      .filter((specieGender) => specieGender.sex === animal.sex);

    return animalGender.length;
  }
  return animalName.residents.length;
}

module.exports = countAnimals;
