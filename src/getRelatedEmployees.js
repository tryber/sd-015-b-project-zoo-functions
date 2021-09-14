const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees
    .filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
