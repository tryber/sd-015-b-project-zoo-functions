const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const arrayNames = employees.filter((emplo) => emplo.managers.includes(managerId));   
    const concatNames = arrayNames.reduce((a, b) => a.concat(`${b.firstName} ${b.lastName}`), []);
    return concatNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
