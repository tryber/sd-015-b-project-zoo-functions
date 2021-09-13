// Agradecimentos à Caról que me ajudou a entender como usar melhor o console.log e achar onde estava errando e também a como deixar o código mais compacto.
const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  // console.log(employeeName);
  if (!employeeName) return {};
  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}
/* console.log(getEmployeeByName('Nigel'));
getEmployeeByName('Nigel'); */
module.exports = getEmployeeByName;
