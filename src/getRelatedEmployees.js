const data = require('../data/zoo_data');

const iterateEmployees = (employeeId) => {
  const filteredManagers = data.employees.reduce((acc, person) => {
    const { firstName, lastName } = person;

    if (person.managers.includes(employeeId)) {
      acc.push(`${firstName} ${lastName}`);
    }

    return acc;
  }, []);

  return filteredManagers.length > 0 ? [true, ...filteredManagers] : [false, ...filteredManagers];
};

function isManager(id) {
  // seu código aqui
  const manager = iterateEmployees(id);

  return manager[0];
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const [, ...manager] = iterateEmployees(managerId);

  if (manager.length > 0) {
    return manager;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
