const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const resultEmployee = employees.find((employee) => employee.id === id); // Retorna a pessoa com a ID
  const primeiroConjuntoAnimal = resultEmployee.responsibleFor[0]; // Captura ID do primeiro conjunto animal
  const buscaEspecie = species.find( (specie) => specie.id === primeiroConjuntoAnimal);
  const residentsDaEspecie = buscaEspecie.residents;
  // Array com animais, do mais velho para o mais novo
  const animalMaisVelho = residentsDaEspecie.sort( (a, b) => b.age - a.age);
  const arrayComAnimal = [animalMaisVelho[0].name, animalMaisVelho[0].sex, animalMaisVelho[0].age];
  // const animalMaisVelho = getOldestAnimal(primeiroConjuntoAnimal);
  // console.log(primeiroConjuntoAnimal); // ID do Primeiro animal da pessoa
  // console.log(resultEmployee);
  // console.log(residentsDaEspecie);
  return arrayComAnimal
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;

// LÓGICA DA FUNÇÃO
// ** Recebe uma ID passada por Parâmetro
// ** Busca essa ID no Employees [FIND]
// ** Verifica o primeiro tipo de animal gerenciado pela pessoa com essa ID no Employees
// ** Varre a lista do primeiro tipo de animal e retorna o mais velho
// ** Em formato ['nome', 'sexo', idade];
