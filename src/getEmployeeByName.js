const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const ObjetoVazio = {};
  const PrimeiroNome = data.employees.find((element) => element.firstName === employeeName);
  const UltimoNome = data.employees.find((element) => element.lastName === employeeName);
  if (PrimeiroNome !== undefined) return PrimeiroNome;
  if (UltimoNome !== undefined) return UltimoNome;
  return ObjetoVazio;
}

module.exports = getEmployeeByName;
