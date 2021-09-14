const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // return employees.some((elemento) => elemento.managers === id);
  return employees.some((elemento) => elemento.managers.includes(id));
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.map((elemento) => {
      if (isManager(managerId) === true) {
        return elemento.responsibleFor;
      }
    });
  }
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
