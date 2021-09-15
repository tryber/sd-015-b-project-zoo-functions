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
      species: `${getAnimal(employee.responsibleFor)}`,
     };
  })
  // console.log(employees);
  const allData = (funcMap);
  return allData
}
console.log(noData());

function getEmployeesCoverage() {
  // seu código aqui
}

module.exports = getEmployeesCoverage;
