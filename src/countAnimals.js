const data = require('../data/zoo_data');

function countAnimals(animal) {
  const specieList = {};
  if (animal === undefined) {
    data.species.forEach((specie) => { specieList[specie.name] = specie.residents.length; });
    return specieList;
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((especie) => especie.name === animal.specie).residents.length;
  }
  if (Object.keys(animal).length > 1) {
    const specificSpecie = data.species.find((specie) => specie.name === animal.specie);
    const residents = specificSpecie.residents.filter((resident) => resident.sex === animal.sex);
    return residents.length;
  }
}

module.exports = countAnimals;
