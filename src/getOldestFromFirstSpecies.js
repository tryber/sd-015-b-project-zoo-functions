const data = require('../data/zoo_data');

function whichAnimalId(caregiver) {
  const animalsId = data.employees.find((id) => (id.id === caregiver));
  const id = animalsId.responsibleFor[0];
  return id;
}

function residents(animalId) {
  const dwellers = data.species.find((animals) => (animals.id === animalId));
  const animalsInfo = dwellers.residents;
  return animalsInfo;
}

function oldestAnimal(animalInfo) {
  const age = animalInfo.reduce((oldest, infos) => {
    const ageInfo = infos.age;
    if (oldest > ageInfo) return oldest;
    return ageInfo;
  }, 0);
  const animalData = animalInfo.find((specie) => (specie.age === age));
  return animalData;
}

function formatData(animalData) {
  const turnIntoArray = Object.values(animalData);
  return turnIntoArray;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  return formatData(oldestAnimal(residents(whichAnimalId(id))));
}

module.exports = getOldestFromFirstSpecies;
