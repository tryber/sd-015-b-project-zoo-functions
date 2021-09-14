const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const managers = [
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83',
  ];
  const idIsManager = managers.includes(id);
  return idIsManager;
}

function getRelatedEmployees(managerId) {

  const manager = isManager(managerId); // Resultado da verificação do ID (retorna True ou False);

  if (manager) { // Se a ID do manager é válida
    // Percorre o array dos funcionários e verifica se possui o id informado na manager
    const managers = employees.filter((employee) => employee.managers.includes(managerId));
    // console.log(managers); // Retorna array de objetos que possuem ID managerId
    // console.log(managers.map((name) => `${name.firstName} ${name.lastName}`)); // Verifica retorno da Função
    return managers.map((name) => `${name.firstName} ${name.lastName}`);
  }

    // const employeFinded = employees.find((employee) => {

    //   if (employee.id === managerId) {

    //     const gerenciados = employee.responsibleFor; // Armazena id dos Gerenciados
    //     const arraySubordinados = []; // Valor inicial do array com nome dos subordinados
    //     gerenciados.forEach((idPessoa) => { // Para cada elemento dentro do array responsavelPor

    //       employees.map((employee) => {
    //         console.log(`NOME PESSOA: ${employee.firstName} ${employee.lastName}`);
    //         console.log(`ID PESSOA ${employee.id}`);
    //         console.log(`ID BUSCADO: ${idPessoa}`);
    //         console.log('***');

    //         // if (employee.id === idPessoa) {
    //         //   console.log(`${employee.firstName} ${employee.lastName}`);
    //         //   arraySubordinados.push(`${employee.firstName} ${employee.lastName}`);
    //         // }
    //       });
    //     });

    //     // console.log(responsavelPor);
    //     console.log(arraySubordinados);
    //     // return employee; // [RETORNA O OBJ REFERENTE AO ID PASSADO]
    //   }
    // });
    // return employeFinded;
  // }
  return 'O id inserido não é de uma pessoa colaboradora gerente!';
}

// getRelatedEmployees('123456');
// console.log(getRelatedEmployees('123456')); // [DEBUG] Verifica retorno da Função
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')); // [DEBUG] Retorna True

module.exports = { isManager, getRelatedEmployees };

// LÓGICA DO DESENVOLVIMENTO:
// ** Recebe a chamada da função com a Id de um funcionário do Zoológico.
// ** Verifica, através da função isManager, se aquela Id corresponde a Id de uma pessoa Gerente do Zoológico.
// Se sim, a função retorna true, se não, retorna false;
// ** Com base no retorno dessa função secundária, a função primária verifica se o mesmo é true ou false
// ** Se True, Executa o Array.map, que irá buscar os funcionários gerenciados pela pessoa informada no campo responsibleFor
// Retornando um Array com os funcionários que essa pessoa gerencia
// ** Se false, retorna uma mensagem no formado: "O id inserido não é de uma pessoa colaboradora gerente!"
