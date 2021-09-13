const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((person) => person.managers.find(manager => manager === id));
}

//verificar se a pessoa é gerente
//retornar um array com os nomes das pessoas que ela gerencia: firstName + lastName
//

function getRelatedEmployees(managerId) {
  
}

console.log(getRelatedEmployees(stephanieId))

module.exports = { isManager, getRelatedEmployees };
