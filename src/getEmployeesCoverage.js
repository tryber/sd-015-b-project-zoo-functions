const data = require('../data/zoo_data');

function getEmployeesCoverage(nameOrID) {
  const object = {};
  if (!nameOrID) {
    data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
      object[`${firstName} ${lastName}`] = responsibleFor.map((idEntradaAnimal) =>
        data.species.find(({ id }) => id === idEntradaAnimal).name);
    });
  }
  data.employees.filter(({ firstName, lastName, id }) =>
    firstName === nameOrID || lastName === nameOrID || id === nameOrID)
    .forEach(({ firstName, lastName, responsibleFor }) => {
      object[`${firstName} ${lastName}`] = responsibleFor
        .map((idEntradaAnimal) => data.species.find(({ id }) =>
          id === idEntradaAnimal).name);
    });
  return object;
}

module.exports = getEmployeesCoverage;
