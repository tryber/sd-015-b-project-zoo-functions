const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(infoObj) {
  const selectedEmployee = employees.find((employee) => { 
    const firstNameIsEqual = infoObj.name === employee.name;
    const lastNameIsEqual = infoObj.name === employee.lastName;
    const idIsEqual = infoObj.id === employee.id;
    return (firstNameIsEqual || lastNameIsEqual || idIsEqual);
  });
  return selectedEmployee;
}

module.exports = getEmployeesCoverage;
