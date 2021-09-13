const data = require('../data/zoo_data');

function countByGender(selectedSpecies, gender) {
  const returnObj = {};
  if (selectedSpecies.length > 1) {
    selectedSpecies.forEach((specie) => {
      const selectedResidents = specie.residents.filter((resident) => resident.sex === gender);
      returnObj[specie.name] = selectedResidents.length;
    });
    return returnObj;
  }
  const filteredResid = selectedSpecies[0].residents.filter((resident) => resident.sex === gender);
  return filteredResid.length;
}

function countGeneralGender(selectedSpecies) {
  const returnObj = {};
  if (selectedSpecies.length > 1) {
    selectedSpecies.forEach((specie) => {
      returnObj[specie.name] = specie.residents.length;
    });
    return returnObj;
  }
  return selectedSpecies[0].residents.length;
}

function countAnimals({ specie = '', gender = '' } = {}) {
  let selectedSpecies;
  if (specie) {
    selectedSpecies = data.species.filter((specie2) => specie2.name === specie);
  } else {
    selectedSpecies = data.species;
  }
  if (gender) {
    return countByGender(selectedSpecies, gender);
  }
  return countGeneralGender(selectedSpecies);
}

module.exports = countAnimals;
