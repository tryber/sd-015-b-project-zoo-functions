const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (!manager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const kouhais = [];
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      kouhais.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return kouhais;
}

module.exports = { isManager, getRelatedEmployees };
