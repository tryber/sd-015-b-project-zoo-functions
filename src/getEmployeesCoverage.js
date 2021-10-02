const data = require('../data/zoo_data');

function getEmployeesCoverage(idOrName) {
  // seu código aqui
  const reducer = data.employees.reduce((acc, curr) => {
    const fullName = `${curr.firstName} ${curr.lastName}`;
    acc[fullName] = [];
    curr.responsibleFor.forEach((responsibleAnimal) => {
      acc[fullName].push(data.species.find((idsFind) => idsFind.id === responsibleAnimal).name);
    });
    return acc;
  }, {});
  if (idOrName === undefined) {
    return reducer;
  }
  const x = data.employees;
  const y = x.find((e) => idOrName === e.id || idOrName === e.firstName || idOrName === e.lastName);
  const fullName = `${y.firstName} ${y.lastName}`;
  const newObjectAnimals = {};
  newObjectAnimals[fullName] = reducer[fullName];
  return newObjectAnimals;
}

module.exports = getEmployeesCoverage;
