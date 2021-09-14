const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const objEmployee = employees.some((employee) => employee.managers.includes(id));
  return objEmployee;
  // return employees[0].managers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

// module.exports = { isManager, getRelatedEmployees };
console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));