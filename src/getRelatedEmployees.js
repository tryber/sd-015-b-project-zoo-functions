const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const managedPeople = data.employees.filter((element) => element.managers.includes(managerId));
    return managedPeople.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
