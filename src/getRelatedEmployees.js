const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

  const managersIds = [stephanieId, olaId, burlId];

  const imManager = managersIds.some((elemento) => id === elemento);

  return imManager;
}

const filterRelatedEmployees = (managerId) => {
  const filterEmployees = employees.filter((elemento) =>
    elemento.managers.some((subArray) => subArray === managerId));
  return filterEmployees;
};

function getRelatedEmployees(managerId) {
  const iamManager = isManager(managerId);

  if (!iamManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const filtered = filterRelatedEmployees(managerId);
  const result = filtered.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  return result;
}

module.exports = { isManager, getRelatedEmployees };
