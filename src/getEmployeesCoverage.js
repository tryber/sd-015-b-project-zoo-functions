const data = require('../data/zoo_data');

const { species, employees } = data;

function getEmployeesCoverage(myEmployee) {
  // seu código aqui
  const { name: employeeName, id: employeeId } = myEmployee;

  const findEmployee = employees.find(
    ({ id, firstName, lastName }) =>
      id === employeeId || firstName === employeeName || lastName === employeeName,
  );

  const employeeCoverage = (id, fullName, species, locations) => ({
    id,
    fullName,
    species,
    locations,
  });

  return findEmployee;
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
