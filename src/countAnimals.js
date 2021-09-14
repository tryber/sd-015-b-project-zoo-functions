const data = require('../data/zoo_data');

function countAnimals(param) {
  if (param) {
    const { specie, sex } = param;
    const specieRequired = data.species
      .find((element) => element.name.toLowerCase() === specie.toLowerCase());
    let residentsRequired = specieRequired.residents;
    if (sex) {
      residentsRequired = residentsRequired
        .filter((element) => element.sex.toLowerCase() === sex.toLowerCase());
    } return residentsRequired.length;
  }
  const objectReturn = {};
  data.species.forEach((element) => {
    const animalName = element.name;
    const animalResidents = element.residents.length;
    objectReturn[`${animalName}`] = animalResidents;
  });
  return objectReturn;
}

module.exports = countAnimals;
