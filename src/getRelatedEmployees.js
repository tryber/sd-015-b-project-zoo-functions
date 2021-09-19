const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employees) => employees.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const fullName = data.employees.filter((element) => element.managers.includes(managerId));
    return fullName.map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
