const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.find((element) => element.id === id);
  const responsibleAnimals = selectedEmployee.responsibleFor;
  const animalSelected = data.species.find((element) => element.id === responsibleAnimals[0]);
  const sortedResidents = animalSelected.residents.sort((a, b) => b.age - a.age);
  const arrayReturn = [];
  sortedResidents
    .forEach((resident) => arrayReturn.push([resident.name, resident.sex, resident.age]));

  return arrayReturn[0];
}

module.exports = getOldestFromFirstSpecies;
console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
