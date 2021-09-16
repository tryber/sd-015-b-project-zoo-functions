const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  return employees.map((emp) => emp.managers.includes(id)).includes(true);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const isManagerVar = isManager(managerId);

  if (!isManagerVar) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

  return data.employees.filter((emp) => emp.managers.includes(managerId))
    .map((emp) => `${emp.firstName} ${emp.lastName}`);
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
