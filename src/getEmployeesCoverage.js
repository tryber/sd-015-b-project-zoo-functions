const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Para o entedimento da estruturação e raciocinio utilizado nesse questão
// acessei: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/erickson-siqueira-zoo-functions-project/src/getEmployeesCoverage.js

const findPerson = (ids) => employees.find((person) => person.id === ids
  || person.firstName === ids
  || person.lastName === ids);
// Nessa parte procuramos algum funcionario que tenha alguma identificação,
//  igual a o parametro passado, seja nome, sobrenome ou id.

const findResponsibleAnimals = (person) => species
  .filter((specie) => person.responsibleFor.find((id) => id === specie.id));
//  Aquí achamos os animais que o funcionario é responsavel. Procuramos
//  na chave person.responsible se existe algum id que seja igual a o id de alguma
//  especie.

const locations = (person) => findResponsibleAnimals(person)
  .map((animal) => animal.location);
//  Aquí achamos os locais que estão os animais. Chamamos a função para
//  ver quais animais aquela pessoa é responsavel findResponsibleAnimals(person),
//  encontrando os animais fazer um novo array (map) com apenas os locais animal.location

const findResponsibleSpecies = (person) => findResponsibleAnimals(person)
  .map((specie) => specie.name);
//  Seguindo a função anterior procuramos o nome do animal que o funcionario
//  é responsavel e criamos um novo array(map) para esses nomes

const creatPersonObj = (person) => {
  const personObj = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: findResponsibleSpecies(person),
    locations: locations(person),
  };
  return personObj;
};
//  Aquí foi criado o objeto com todos os dados da pessoa, seu id,
//  nome completo utilizando template Literals, e nome dos animais que
//  ela é responsavel e  suas localizações, utilizando as seguintes
//  funções respectivamente findResponsibleSpecies(person) e locations(person).

const employeesObjs = () => employees.map((employee) =>
  creatPersonObj(employee));
//  Nessa parte é criado um objeto contendo todas as informações
// de tpdps ps funcionarios, acessamos oobjeto employees e fazemos
//  um novo com map pela função creatPesonObj, cada element que o map
// jogar como parametro sera jogado nessa função e retorna um novo
// objeto

function getEmployeesCoverage(idsObj) {
  let employeeObj = {};
  if (idsObj) {
    const ids = Object.values(idsObj).find((element) => element);
    // 1a*
    const personFound = findPerson(ids);
    //  2a*
    if (personFound) {
      employeeObj = (creatPersonObj(personFound));
      // 3a*
    } else {
      throw new Error('Informações inválidas');
      // 4a*
    }
  } else {
    employeeObj = employeesObjs();
    // 5a*
  }
  return employeeObj;
}

// 1a*
// Aqui verificamos se existe um parametro, se sim entramos no if,
// utilizando o objct.value jogamos todos os valores
// do objeto passado por parametro em um array e utilizo o find para retornar
// o elemento que esse array possua.

// 2a*
// Aqui jogamos o ids, o valor encontrado anteriormente passado por parametro
// como  parametro da função findPerson. Para verificar se esse valor existe em algum
// funcionario.

// 3a*
// aqui se esse vamor é encontrado em um funcionario, entramos no if, e
// dizemos que o objeto a ser criado, deve utilizar a função
// creatPersonObj, utilizando o personFound como parametro. lembrando
// personFound é a função para verificar se existe o funcionario com
// o informação pasado por parametro (ids).

// 4a*
// Caso não existe ninguem com esse dado, retorna um erro.

// 5a*
// Aqui caso não passe nenhum dado como parametro
// o objeto é preenchido pela função emplyeesObjs()
// que retorna um objeto com todos os funcionario, e
// suas respectivas informações.
module.exports = getEmployeesCoverage;
