const data = require('../data/zoo_data');

function animalsWithoutParameter() {
  const specieAnimals = {};
  data.species.forEach((specie) => { specieAnimals[specie.name] = specie.residents.length; });
  return specieAnimals;
}

function amountAnimalsSpeciee(specieAnimals) {
  const amountAnimals = data.species.find((specie) => specie.name === specieAnimals.specie);
  return amountAnimals.residents.length;
}

function amountAnimalsSexAndSpeciee(amountAnimals) {
  const specieSex = data.species.find((specie) => specie.name === amountAnimals.specie)
    .residents.filter((resident) => resident.sex === amountAnimals.sex).length;

  return specieSex;
}

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return animalsWithoutParameter();
  }
  if (Object.values(animal).length === 1) {
    return amountAnimalsSpeciee(animal);
  }
  if (Object.values(animal.sex)) {
    return amountAnimalsSexAndSpeciee(animal);
  }
}

module.exports = countAnimals;
