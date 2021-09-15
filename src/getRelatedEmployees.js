const data = require('../data/zoo_data');

const getManagersIds = () => {
  const managerList = [];
  data.employees.forEach(({ managers }) => {
    managers.forEach((manager) => {
      if (!managerList.includes(manager)) managerList.push(manager);
    });
  });
  return managerList;
};

const isManager = (id) => {
  const managerIds = getManagersIds();
  if (managerIds.includes(id)) return true;
  return false;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relateds = data.employees.filter((employee) => employee.managers.includes(managerId));
  return relateds.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
