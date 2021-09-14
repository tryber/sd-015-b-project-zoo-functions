const data = require('../data/zoo_data');
const { species } = data;

function paramVoid () {
  const defaultAnimals = [];
  const mapAnimals = species.map( (specie) => {
    defaultAnimals.push(`${specie.name}: ${specie.residents.length}`);
  });
  // console.log(arrayAnimals);
  return defaultAnimals;
}
function countAnimals(animal) {
  // seu código aqui
  const arrayAnimals = [];
  // Função que é executada quando não é passado nenhum parâmetro
  if (!animal) {
    arrayAnimals.push(paramVoid());
  }

  

  return arrayAnimals;
}

console.log(countAnimals());

module.exports = countAnimals;

// LÓGICA DA FUNÇÃO:
// ** Contabiliza quantidade de animais
// ** Se nenhum parâmetro é passado, retorna um objeto { nomeDoAnimal: value };
// ** Se é passada somente a espécie, é retornado todos os animais daquela espécie
// ** Se é passado um animal e seu gênero, é retornado todos os animais daquela espécie e gênero
