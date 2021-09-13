const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const managers = employees.find((person) => person.id === 'stephanieId' || person.id === 'burlId' || person.id === 'olaId');
  if(!managers) {
    return false;
  }
 if(managers){
    return true;
  }
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
