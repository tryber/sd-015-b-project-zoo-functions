const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalsList = {};
    data.species.forEach((specie) => {
      animalsList[specie.name] = specie.residents.length;
    });
    return animalsList;
  }
  const speciement = data.species.find((spec) => spec.name === animal.specie);
  if (animal.sex === undefined) {
    return speciement.residents.length;
  }
  let count = 0;
  speciement.residents.forEach((resident) => {
    if (resident.sex === animal.sex) {
      count += 1;
    }
  });
  return count;
}

module.exports = countAnimals;
