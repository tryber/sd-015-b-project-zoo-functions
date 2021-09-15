const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const setResponsible = (id) => employees.find((employee) => employee.id === id).responsibleFor[0];
const createAnimalObject = (responsibleID) => species.find((specie) => specie.id === responsibleID);

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getResponsibleID = setResponsible(id);
  const objAnimal = createAnimalObject(getResponsibleID);

  const oldestAnimal = objAnimal.residents.reduce((acc, animal) =>
    ((acc.age > animal.age) ? acc : animal), {});

  return Object.values(oldestAnimal);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
