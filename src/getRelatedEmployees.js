const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  if (id === burlId || id === olaId || id === stephanieId) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const result = [];
  if (managerId === burlId || managerId === olaId || managerId === stephanieId) {
    data.employees.forEach((element) => {
      if (element.managers.includes(managerId)) {
        result.push(`${element.firstName} ${element.lastName}`);
      }
    });
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
