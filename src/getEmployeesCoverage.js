const data = require('../data/zoo_data');
const {employees} = data;
const noData = () => {
  // Se nenhum dado é passado
  // Retorna todos os dados formatados
  // Para cada Funcionário, pegar os animais que ele cuida
  // E também a localização desse animais
  const allData = [];
  const funcMap = allData.push(employees.map( (employee) => {
    // console.log(employee.id);
    return employee.id;
  }))
  // console.log(employees);
  return allData
}
console.log(noData());

function getEmployeesCoverage() {
  // seu código aqui
}

module.exports = getEmployeesCoverage;
