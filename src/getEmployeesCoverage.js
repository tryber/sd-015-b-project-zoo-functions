const data = require('../data/zoo_data');

const {employees} = data;

const getAnimal = (...ids) => {
  const nomesAnimais = [];
  // console.log(ids);
  const capturaIds = ids.forEach( (id) => {
    nomesAnimais.push(id);
  })
  // console.log(nomesAnimais);
  return nomesAnimais[0];
}
// const testeIdAnimais = ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'];
// console.log(getAnimal(testeIdAnimais));

const noData = () => {
  // Retorna todos os dados formatados.
  // Para cada Funcionário, pegar os animais que ele cuida
  // E também a localização desse animais
  
  const funcMap = employees.map( (employee) => {
    // console.log(employee.id);
    const arrayAnimais = 0;
    const idsAnimais = employee.responsibleFor;
    return { 
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      // species: `Tratar Id dos animais capturar o objeto retornado, e salvar seu nome`, // getAnimal(idsAnimais);
      species: getAnimal(idsAnimais),
      locations: `Tratar o objeto retornado e mostrar sua localização`, // getLocation();
     };
  })
  // console.log(employees);
  const allData = (funcMap);
  return allData
}
console.log(noData());

function getEmployeesCoverage(peopleId) {
  // seu código aqui
  if (!peopleId) return noData();
}
// console.log(getEmployeesCoverage(''));

module.exports = getEmployeesCoverage;
