const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalID = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === animalID);
  let olderAnimal;
  animal.residents.forEach((currentResident) => {
    if (!olderAnimal) {
      olderAnimal = currentResident;
    }
    olderAnimal = olderAnimal.age > currentResident.age ? olderAnimal : currentResident;
  });
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
