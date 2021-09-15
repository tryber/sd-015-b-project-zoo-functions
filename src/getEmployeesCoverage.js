const data = require('../data/zoo_data');

const {employees} = data;

const getAnimal = (...ids) => {
  const nomesAnimais = [];
  nomesAnimais.push(ids.forEach( (id) => {
    return id;
  }));
  return nomesAnimais;
}

const noData = () => {
  // Se nenhum dado é passado
  // Retorna todos os dados formatados
  // Para cada Funcionário, pegar os animais que ele cuida
  // E também a localização desse animais
  
  const funcMap = employees.map( (employee) => {
    // console.log(employee.id);
    const arrayAnimais = 0;
    return { 
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: `Tratar Id dos animais capturar o objeto retornado, e salvar seu nome`,
      locations: `Tratar o objeto retornado e mostrar sua localização`,
     };
  })
  // console.log(employees);
  const allData = (funcMap);
  return allData
}
// console.log(noData());

function getEmployeesCoverage(peopleId) {
  // seu código aqui
  if (!peopleId) return noData();
}
// console.log(getEmployeesCoverage(''));

module.exports = getEmployeesCoverage;
