const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  return managers.some((manager) => manager === id);
}

const whoIsTheManager = (id) => data.employees.find((employee) => employee.id === id);

const relatedEmployees = (manager) => data.employees.reduce((acc, employee) =>
  ((employee.managers.includes(manager.id))
    ? acc.concat(`${employee.firstName} ${employee.lastName}`) : acc), []);

function getRelatedEmployees(managerId) {
  // seu código aqui
  const verifyManager = isManager(managerId);
  if (verifyManager) {
    const manager = whoIsTheManager(managerId);
    const arrayEmployees = relatedEmployees(manager);
    return arrayEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = { isManager, getRelatedEmployees };
