const data = require("../data/zoo_data");

function isManager(id) {
  // seu código aqui
  const employee = data.employees.find((employee) => employee.id === id);
  const isManager = employee.managers.length === 0;
  return isManager;
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  let employees;

  if (isManager(managerId)) {
    employees = data.employees
    .filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  } else {
    throw new Error("O id inserido não é de uma pessoa colaboradora gerente!");
  }
  return employees;
}

module.exports = { isManager, getRelatedEmployees };
