const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const gerentes = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  const verifyEmployee = employees.find((employee) => employee.id === id);
  const verifyManager = gerentes.some((manager) => manager === verifyEmployee.id);

  return verifyManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const validation = isManager(managerId);
  if (!validation) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const namesManagers = employees.filter(({ managers }) => managers.join('') === managerId);
  const result = namesManagers.map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return result;
}

module.exports = { isManager, getRelatedEmployees };
