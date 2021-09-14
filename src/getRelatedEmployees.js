const data = require('../data/zoo_data');

function isManager(id) {
  const trueOrFalse = data.employees.some((element) => element.managers.includes(id));
  return trueOrFalse;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const list = data.employees.filter((element) => element.managers.includes(managerId));
    console.log(list);
    const newArray = list.map((element) => `${element.firstName} ${element.lastName}`);
    return newArray;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83');
