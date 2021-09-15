const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const managers = [];
  employees.forEach((empregado) => managers.push(...empregado.managers));
  if (!managers.find((manager) => manager === id)) {
    return false;
  } return true;
}

function getRelatedEmployees(managerId) {
  const isAManager = isManager(managerId);
  if (isAManager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } const responsible = employees.filter((employee) => {
    const firtCondition = employee.managers[0] === managerId;
    const secondCondition = employee.managers[1] === managerId;
    return firtCondition || secondCondition;
  });
  const employeesFullNames = [];
  responsible.forEach((employee, index) => {
    employeesFullNames.push(`${employee.firstName} ${employee.lastName}`);
  });
  return employeesFullNames;
}

module.exports = { isManager, getRelatedEmployees };

getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83');
