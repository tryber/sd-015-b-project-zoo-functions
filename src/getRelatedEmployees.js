const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const employee = employees.find((person) => person.id);
  const Manager = employees.some((person) => person.managers.find((name) => {
    const result = name === employee || name === id;
    return result;
  }));
  return Manager;
}

function getRelatedEmployees(managerId) {
  const ManagerName = employees.find((employee) => employee.id === managerId);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const relatedEmployees = employees.filter((employee) => {
      const result = employee.managers.find((id) => id === managerId || id === ManagerName);
      return result;
    });
    const relatedEmployeesName = relatedEmployees.map((employee) => {
      const name = `${employee.firstName} ${employee.lastName}`;
      return name;
    });
    return relatedEmployeesName;
  }
}

module.exports = { isManager, getRelatedEmployees };
