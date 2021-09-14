const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // return employees.some((elemento) => elemento.managers == id);
  return employees.some((elemento) => elemento.managers.includes(id));
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((elemento) => elemento
      .managers.includes(managerId)).map((nomes) => `${nomes.firstName} ${nomes.lastName}`);
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
