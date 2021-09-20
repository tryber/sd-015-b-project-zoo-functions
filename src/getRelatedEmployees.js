const data = require('../data/zoo_data');
const { employees } = data;
function isManager(id) {
  // seu código aqui
  // return employees.filter(employee => employee.managers === id? employee.managers : false);
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

// console.log(getRelatedEmployees(stephanieId));
// console.log();

module.exports = { isManager, getRelatedEmployees };
