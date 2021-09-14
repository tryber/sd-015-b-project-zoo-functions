const data = require('../data/zoo_data');
const { species } = data;


function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    // console.log("Resultado sem nenhum animal passado!!!"); // [DEBUG] Verifica entrada na função
    const arrayAnimals = [];
    const mapAnimais = species.map( (specie) => {
      arrayAnimals.push(`${specie.name}: ${specie.residents.length}`);
    });
    console.log(arrayAnimals);
    return arrayAnimals;
  }
  
}

countAnimals();

module.exports = countAnimals;

// LÓGICA DA FUNÇÃO:
// ** Contabiliza quantidade de animais
// ** Se nenhum parâmetro é passado, retorna um objeto { nomeDoAnimal: value };
// ** Se é passada somente a espécie, é retornado todos os animais daquela espécie
// ** Se é passado um animal e seu gênero, é retornado todos os animais daquela espécie e gênero
