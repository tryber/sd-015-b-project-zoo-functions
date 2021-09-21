const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // Primeiro é verificado se se o id passado como parâmetro se iguala ao de algum id do data.js.
  const searchedEmployee = employees.find((person) => person.id === id);
  // Verificado se o id do funcionário se iguala, é então buscado dentro do 'responsible for' do respectivo id a espécie que estiver na primeira posição (posição 0 no caso).
  const firstspecie = species.find((animal) => animal.id === searchedEmployee.responsibleFor[0]);
  // Dentro de residents da primeira espécie é feito um sort das idades invertendo a ordem nas quais são organizadas, começando pela maior idade (maior número) ao invés da menor.
  const sortedAnimal = firstspecie.residents.sort((a, b) => b.age - a.age);
  // É então retornado a primeira posição de sortedAnimal, que corresponde ao animal mais velho encontrado.
  return Object.values(sortedAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
