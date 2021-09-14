const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const check = employees.some(() => (employees.find((k) => k.managers.find((m) => m === id))));
  // const employee = employees.filter((person) => person.id === id);
  // console.log('----------------------check É:', check);
  return check;
}
console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// function getRelatedEmployees(managerId) {
//   // seu código aqui
// }

// module.exports = { isManager, getRelatedEmployees };
