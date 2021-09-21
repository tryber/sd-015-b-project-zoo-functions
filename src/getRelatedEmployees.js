const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  if (employees.find((employee) => managers.includes(id))) {
    return true;
  } return false;
}

function getRelatedEmployees(managerId) {
  const result = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      result.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return result;
}

getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
