const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const employeesList = employees.some((employee) => {
    const employeeIsManager = employee.managers.find((employeeId) => employeeId === id);
    return id === employeeIsManager;
  });
  return employeesList;
}

function containManager(manager, employeesList, managerId) {
  const employeeOfManager = manager.managers.find((id) => {
    if (id === managerId) {
      return employeesList.push(`${manager.firstName} ${manager.lastName}`);
    }
    return false;
  });
  return employeeOfManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const responsiblesEmployees = employees.reduce((employeesList, manager) => {
    if (containManager(manager, employeesList, managerId) === undefined) {
      return employeesList;
    }
    return employeesList;
  }, []);
  return responsiblesEmployees;
}

module.exports = { isManager, getRelatedEmployees };
