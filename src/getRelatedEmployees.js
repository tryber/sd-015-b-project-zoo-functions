const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const objEmployee = employees.some((employee) => employee.managers.includes(id));
  return objEmployee;
}

// let maneged = [];
// const getManeged = employees.reduce((acc, employee) => (employee.managers.includes(managerId)))

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map((managed) => `${managed.firstName} ${managed.lastName}`);
  }
}
// module.exports = { isManager, getRelatedEmployees };
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
