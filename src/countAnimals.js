const data = require('../data/zoo_data');

function countBySex(selectedSpecies, sex) {
  const returnObj = {};
  if (selectedSpecies.length > 1) {
    selectedSpecies.forEach((specie) => {
      const selectedResidents = specie.residents.filter((resident) => resident.sex === sex);
      returnObj[specie.name] = selectedResidents.length;
    });
    return returnObj;
  }
  const filteredResid = selectedSpecies[0].residents.filter((resident) => resident.sex === sex);
  return filteredResid.length;
}

function countGeneralSex(selectedSpecies) {
  const returnObj = {};
  if (selectedSpecies.length > 1) {
    selectedSpecies.forEach((specie) => {
      returnObj[specie.name] = specie.residents.length;
    });
    return returnObj;
  }
  return selectedSpecies[0].residents.length;
}

function countAnimals({ specie = '', sex = '' } = {}) {
  let selectedSpecies;
  if (specie) {
    selectedSpecies = data.species.filter((specie2) => specie2.name === specie);
  } else {
    selectedSpecies = data.species;
  }
  if (sex) {
    return countBySex(selectedSpecies, sex);
  }
  return countGeneralSex(selectedSpecies);
}

module.exports = countAnimals;
