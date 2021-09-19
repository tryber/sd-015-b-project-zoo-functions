const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function searchId(idFind) {
  const searchEmployee = employees.find(({ id }) => id === idFind); // procurando funcionarios
  return searchEmployee;
}
function searchAnimal(employee) {
  const { responsibleFor: [animal] } = employee;
  return animal;
}

function getOldestFromFirstSpecies(idFind) {
  const employee = searchId(idFind);
  const animal = searchAnimal(employee);
  const serchSpecies = species.find(({ id }) => id === animal);
  const animalAge = serchSpecies.residents.reduce((animalPrevious, animalActual) => {
    if (animalPrevious.age < animalActual.age) return animalActual;
    return animalPrevious;
  });
  return Object.values(animalAge);
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
