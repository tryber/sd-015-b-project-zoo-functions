const data = require('../data/zoo_data');

const { employees, species } = data;

// function getOldestAnimal(idDoConjunto) {
  // Varre o array de animais
  // busca pelo conjunto de animais com essa id específica
  // aplica o sort para ordenar do mais velho para o mais novo
  // Captura e retorna o mais velho POSIÇÃO 0
  // const findAnimals = species.find( (specie) => {
  //   // console.log('Varredura das Espécies: ', specie);
  //   if (specie.id === idDoConjunto) {
  //     // console.log('Espécie encontrada: ', specie);
  //     return specie;
  //   }
  //   return specie
  // });
//   const allResidents = findAnimals.residents.sort( (a, b) => b.age - a.age);
//   // const sortResidents = allResidents
//   // console.log(allResidents[0]);
//   const arrayNovoFormato = [allResidents[0].name, allResidents[0].sex, allResidents[0].age];
//   return arrayNovoFormato;
// }
// console.log(getOldestAnimal('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const resultEmployee = employees.find((employee) => employee.id === id); // Retorna a pessoa com a ID
  const primeiroConjuntoAnimal = resultEmployee.responsibleFor[0]; // Captura ID do primeiro conjunto animal
  const buscaEspecie = species.find( (specie) => specie.id === primeiroConjuntoAnimal);
  const residentsDaEspecie = buscaEspecie.residents;
  const ordenaAnimalMaisVelho = residentsDaEspecie.sort( (a, b) => b.age - a.age);

  // const animalMaisVelho = getOldestAnimal(primeiroConjuntoAnimal);
  // console.log(primeiroConjuntoAnimal); // ID do Primeiro animal da pessoa
  // console.log(resultEmployee);
  return animalMaisVelho
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;

// LÓGICA DA FUNÇÃO
// ** Recebe uma ID passada por Parâmetro
// ** Busca essa ID no Employees [FIND]
// ** Verifica o primeiro tipo de animal gerenciado pela pessoa com essa ID no Employees
// ** Varre a lista do primeiro tipo de animal e retorna o mais velho
// ** Em formato ['nome', 'sexo', idade];
