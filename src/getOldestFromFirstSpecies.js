const data = require('../data/zoo_data');
// fonte https://github.com/tryber/sd-015-b-project-zoo-functions/blob/annie-haurani-zoo-functions/src/getEmployeesCoverage.js

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const result = data.species.find((specie) => specie.id === specieId)
    .residents.sort((ani1, ani2) => ani2.age - ani1.age).map((animal) =>
      [animal.name, animal.sex, animal.age])[0];
  return result;
}

module.exports = getOldestFromFirstSpecies;
