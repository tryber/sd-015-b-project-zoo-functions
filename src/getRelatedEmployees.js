const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const getEmployee = data.employees.filter((employee) =>
      employee.managers.includes(managerId));
    return getEmployee.reduce((acc, employee) => {
      const { firstName, lastName } = employee;
      acc.push(`${firstName} ${lastName}`);
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
