const data = require('../data/zoo_data');

function isManager(id) {
  const trueOrFalse = data.employees.some((element) => element.managers.includes(id));
  return trueOrFalse;
}

function getRelatedEmployees(managerId) {

}

module.exports = { isManager, getRelatedEmployees };
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
