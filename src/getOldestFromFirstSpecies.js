const data = require('../data/zoo_data');
const { employees } = data;

function getEmployee(employeeID) {
  const findEmployee = employees.find( (employee) => {
    // console.log('Varredura do employee: ', employee);
    if (employee.id === employeeID) {
      // console.log('Employee encontrado: ', employee);
      return employee;
    }
    return employee;
  });
  return findEmployee;
}

// console.log(getEmployee('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))
// function getAnimal(animalType) {

// }
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const resultEmployee = getEmployee(id); // Retorna a pessoa com a ID
  // console.log(resultEmployee);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;

// LÓGICA DA FUNÇÃO
// ** Recebe uma ID passada por Parâmetro
// ** Busca essa ID no Employees [FIND]
// ** Verifica o primeiro tipo de animal gerenciado pela pessoa com essa ID no Employees
// ** Varre a lista do primeiro tipo de animal e retorna o mais velho
// ** Em formato ['nome', 'sexo', idade];
