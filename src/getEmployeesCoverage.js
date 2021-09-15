const data = require('../data/zoo_data');

const {employees, species} = data;

const getAnimal = (...ids) => {
  const idsAnimais = [];
  const capturaIds = ids.forEach( (id) => {
    idsAnimais.push(id);
  });
  // console.log(idsAnimais);
  return 0;
}

const noData = () => {
  
  const funcMap = employees.map( (employee) => {
    const idsAnimais = employee.responsibleFor;
    return { 
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      // species: `Tratar Id dos animais capturar o objeto retornado, e salvar seu nome`, // getAnimal(idsAnimais);
      species: getAnimal(idsAnimais), // Array com o nome dos
      // locations: `Tratar o objeto retornado e mostrar sua localização`, // getLocation();
      locations: `0`, // getLocation();
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
