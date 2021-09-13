const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const managers = [stephanieId, olaId, burlId];

function isManager(id) {
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
