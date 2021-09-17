const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
function isManager(ids) {
  const array = [stephanieId, olaId, burlId];
  return array.some((element) => element === ids);
}

function getRelatedEmployees(Id) {
  const x = data.employees.filter((e) => e.managers[0] === Id || e.managers[1] === Id);
  const y = x.map((element) => `${element.firstName} ${element.lastName}`);
  if (y.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    console.log(typeof y === typeof []);
    return y;
  }
}
console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
