const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.map((element) => element.firstName);      
  };  
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
