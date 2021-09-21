const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const responsabilityID = Object.values(employees).find((employee) =>
    employee.id === id).responsibleFor[0];
  const animal = Object.values(species).find((specie) => specie.id === responsabilityID).residents
    .sort((a, b) => {
      if (a.age > b.age) {
        return -1;
      }
      if (a.age < b.age) {
        return 1;
      }
      return 0;
    });
  return [`${animal[0].name}`, `${animal[0].sex}`, animal[0].age];
}

module.exports = getOldestFromFirstSpecies;
