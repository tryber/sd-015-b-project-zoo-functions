const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managersId = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  const checkIfManager = managersId.includes(id);
  return checkIfManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const managerResponsibleFor = [];
  if (isManager(managerId)) {
    employees.forEach((employee) => {
      const isManagerOfEmployee = employee.managers.includes(managerId);
      if (isManagerOfEmployee) {
        managerResponsibleFor.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return managerResponsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
// console.log(getRelatedEmployees('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = { isManager, getRelatedEmployees };
