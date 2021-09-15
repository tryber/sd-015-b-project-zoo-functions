const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const gerente = isManager(managerId);
  if (!gerente) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filtroDeColaborador = employees.filter((employee) => employee.managers.includes(managerId));

  return filtroDeColaborador.map((employee) =>
    `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
