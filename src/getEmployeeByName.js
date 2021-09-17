const data = require('../data/zoo_data');

// se o parametro for algum valor falsy retorna um obj vazio ,se nao, retorna o obj que pertence ao nome dado no parametro procurando no zoo_data
// se o parametro é igual
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return data.employees.find((employee) => employeeName.includes(employee.lastName)
  || employeeName.includes(employee.firstName));
}
module.exports = getEmployeeByName;
