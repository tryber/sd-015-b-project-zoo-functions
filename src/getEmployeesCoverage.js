const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeSpecies() {

}

function getEmployeesCoverage({ name }) {
  const employee = employees.find(({ firstName }) => firstName === name);
  const employeeInfo = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getEmployeeSpecies(employee),
    location: getEmployeeLocation(),
  };
  console.log(employeeInfo);
}

getEmployeesCoverage({ name: 'Sharonda' });
module.exports = getEmployeesCoverage;
