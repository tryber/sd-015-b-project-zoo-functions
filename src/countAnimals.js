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

function speciesAndGenderParameter({ specie, gender }) {
  let { residents } = species.find((specieData) => specieData.name === specie);
  residents = !gender ? residents : residents.filter((resident) => resident.sex === gender);
  return residents.length;
}

function countAnimals(animal) {
  if (!animal) {
    return emptyParameters();
  }
  return speciesAndGenderParameter(animal);
}

module.exports = countAnimals;
