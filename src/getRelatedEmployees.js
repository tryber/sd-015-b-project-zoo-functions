const data = require("../data/zoo_data");

function isManager(id) {
  // seu código aqui
  const employee = data.employees.find((employee) => employee.id === id);
  const isManager = data.employees.some(({managers}) => managers.includes(employee.id));
  return isManager;
}

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
