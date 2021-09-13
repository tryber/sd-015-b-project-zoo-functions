const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  let colaboradores = {};
  if (employeeName === undefined || employeeName === '') return {};

  employees.filter( (employe) => {
    if (employe.firstName === employeeName || employe.lastName === employeeName) {
      colaboradores = employe;
    }
    return colaboradores;
  });
  return colaboradores;
  }

// getEmployeeByName('Teste');
// console.log(getEmployeeByName('Emery', 'Nelson', 'Bethea', 'Wilburn'));
// console.log(getEmployeeByName('Emery')); // [DEBUG] Realiza Pesquisa pelo Nome
// console.log(getEmployeeByName('Elser')); // [DEBUG] Realiza Pesquisa pelo Sobrenome

module.exports = getEmployeeByName;

// LÓGICA DO DESENVOLVIMENTO:
// ** Devemos filtrar o Array de objetos, para verificar se existe, na lista de colaboradores,
// algum elemento com o devido nome e/ou sobrenome.
// ** Depois de filtrados e armazenados no array, devemos retornar o array com os nomes dos
// Colaboradores encontrados com estas características
// **
