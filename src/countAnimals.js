const data = require('../data/zoo_data');

function parameterUndefined() {
  const list = {};
  data.species.forEach((specie) => {
    list[`${specie.name}`] = specie.residents.length;
  });
  return list;
}

function speciesObjectParameter(animal) {
  const animalKind = data.species.find((animalSpecie) => animalSpecie.name === animal.specie);
  return animalKind.residents.length;
}

function speciesAndGenderObjectParameter(animal) {
  const animalKind = data.species.find((animalSpecie) => animalSpecie.name === animal.specie);
  const beasts = animalKind.residents.filter((beast) => beast.sex === animal.gender);
  return beasts.length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return parameterUndefined();
  }
  if (Object.entries(animal).length === 1) {
    return speciesObjectParameter(animal);
  }
  if (Object.entries(animal).length === 2) {
    return speciesAndGenderObjectParameter(animal);
  }
}

module.exports = countAnimals;
