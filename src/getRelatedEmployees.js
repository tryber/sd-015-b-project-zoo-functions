const { employees } = require('../data/zoo_data');

function isManager(id) {
  return (
    employees.some(({ managers }) => (
      managers.find((manager) => (
        manager === id
      ))
    ))
  );
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return (
      employees.filter(({ managers }) => (
        managers.some((manager) => (
          manager === managerId
        ))
      )).map(({ firstName, lastName }) => (
        `${firstName} ${lastName}`
      ))
    );
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
