const { employees } = require('../data/zoo_data');

function isManager(employeeId) {
  return employees.some((employee) => employee.managers.includes(employeeId));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const colaboradores = employees.filter(({ managers }) => managers.includes(managerId));

    return colaboradores.map(({ lastName, firstName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
