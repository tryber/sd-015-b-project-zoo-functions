const data = require('../data/zoo_data');

const managerList = [];

function isManager(id) {
  data.employees.forEach((employee) => managerList.push(employee.managers));
  for (let i = 0; i < managerList.length; i += 1) {
    if (managerList[i].includes(id)) {
      return true;
    }
  }
  return false;
}

function getRelatedEmployees(managerId) {
  const peopleManaged = [];
  data.employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      peopleManaged.push(`${employee.firstName} ${employee.lastName}`);
    } else if (isManager(managerId) === false) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
  });
  return peopleManaged;
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
