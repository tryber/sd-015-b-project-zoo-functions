const data = require('../data/zoo_data');

function countByGender(selectedSpecies, gender) {
  let returnObj = {};
  if (selectedSpecies.length > 1) {
    selectedSpecies.forEach((specie) => {
      let selectedResidents = specie.residents.filter((resident) => resident.sex === gender);
      returnObj[specie.name] = selectedResidents.length;
    });
    return returnObj;
  } else {
    const filteredResidents = selectedSpecies[0].residents.filter((resident)=> resident.sex === gender)
    return filteredResidents.length;
  };
}

function countGeneralGender(selectedSpecies) {
  let returnObj = {}
  if (selectedSpecies.length > 1) {
    selectedSpecies.forEach((specie) => returnObj[specie.name] = specie.residents.length);
    return returnObj 
  }
  return selectedSpecies[0].residents.length
}

function countAnimals({ specie= '', gender= ''} = {}) {
  let selectedSpecies;
  if (specie) {
    selectedSpecies = data.species.filter((specie2) => specie2.name === specie);
  } else {
    selectedSpecies = data.species;
  }
  if (gender) {
    return countByGender(selectedSpecies, gender);
  }else {
    return countGeneralGender(selectedSpecies);
  }
}

console.log(countAnimals({ specie: 'bears', gender: 'female' }))

module.exports = countAnimals;
