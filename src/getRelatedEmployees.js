const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const manager = employees.reduce((acc, employee) => acc + employee.managers, []).includes(id);
  return manager;
}

function getRelatedEmployees(managerId) {
  const employee = isManager(managerId);
  if (employee) {
    const manager = employees.find((manger) => manger.id === managerId);
    const gerenciados = employees.filter((p) => p.managers.includes(manager.id));
    const names = gerenciados.map((p) => `${p.firstName} ${p.lastName}`);
    return names;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
