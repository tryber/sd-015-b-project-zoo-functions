const data = require('../data/zoo_data');

function isManager(id) {
  if (data.employees.find((employee) => employee.managers.find((managerId) => managerId === id))) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const responsibleObj = data.employees.filter((employee) => {
      return employee.managers.find((manager) => manager === managerId)
    });
    const responsibleStr = responsibleObj.map((obj) => `${obj.firstName} ${obj.lastName}`)
    return responsibleStr
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!')
}
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992'
console.log(getRelatedEmployees(stephanieId))

module.exports = { isManager, getRelatedEmployees };
