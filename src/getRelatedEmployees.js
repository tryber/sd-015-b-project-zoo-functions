const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const verify = isManager(managerId);

  if (verify === true) {
    const managers = employees
      .filter((employee) => employee.managers.includes(managerId));

    const getEmployees = managers
      .map((employee) => `${employee.firstName} ${employee.lastName}`);

    return getEmployees;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
