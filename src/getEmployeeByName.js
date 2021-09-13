const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  // seu código aqui
  const colaboradores = [];
  if (employeeName === undefined || employeeName === '') return {};

  employees.filter( (employe) => {
    employeeName.forEach( (name) => {
      if (employe.firstName === name || employe.lastName === name) {
        colaboradores.push(employe);
      }
      return colaboradores;
    });
    return colaboradores;  
  })
  return colaboradores;
  // return employeeName;
}

// getEmployeeByName('Teste');
// console.log(getEmployeeByName('Emery', 'Nelson', 'Bethea', 'Wilburn'));
console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;

// LÓGICA DO DESENVOLVIMENTO:
// ** Devemos filtrar o Array de objetos, para verificar se existe, na lista de colaboradores,
// algum elemento com o devido nome e/ou sobrenome.
// ** Depois de filtrados e armazenados no array, devemos retornar o array com os nomes dos
// Colaboradores encontrados com estas características
// ** 
