const data = require('../data/zoo_data');

const { species } = data;

function emptyParameters() {
  const animalQtd = {};
  species.map((specie) => {
    animalQtd[specie.name] = specie.residents.length;
    return animalQtd;
  });
  return animalQtd;
}

function speciesAndGenderParameter({ specie, sex }) {
  let { residents } = species.find((specieData) => specieData.name === specie);
  residents = !sex ? residents : residents.filter((resident) => resident.sex === sex);
  return residents.length;
}

function countAnimals(animal) {
  if (!animal) {
    return emptyParameters();
  }
  return speciesAndGenderParameter(animal);
}

module.exports = countAnimals;
