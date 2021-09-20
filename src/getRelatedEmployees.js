const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  let result;
  employees.find((element) => {
    if (element.managers.includes(id)) {
      result = true;
      return result;
    }
    result = false;
    return result;
  });
  console.log(result);
  return result;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const booleanTest = isManager(managerId);
  if (booleanTest === true) {
    const manageArray = employees.filter((element) => element.managers.includes(managerId));
    const employeesNames = manageArray.map((element) => `${element.firstName} ${element.lastName}`);
    return employeesNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
