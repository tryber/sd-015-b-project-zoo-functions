const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const check = employees.some(() => (employees.find((k) => k.managers.find((m) => m === id))));
  return check;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedEmployees = employees.filter((person) => person.managers.includes(managerId));
  const result = relatedEmployees.map((person) => `${person.firstName} ${person.lastName}`);
  return result;
}

module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
