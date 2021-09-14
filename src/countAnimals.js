const data = require('../data/zoo_data');
const { species } = data;

function paramVoid () {
  const defaultAnimals = [];
  const mapAnimals = species.map( (specie) => {
    const formatedString = `${specie.name}:, ${specie.residents.length}`;
    defaultAnimals.push(formatedString);
  });
  // console.log(arrayAnimals);
  // console.log(defaultAnimals.sort());
  // return defaultAnimals;
  return defaultAnimals.sort();
}
// console.log(`Retorno paramVoid: ${paramVoid()}`);

function countAnimals(animal) {
  // seu código aqui
  const arrayAnimals = [];
  // Função que é executada quando não é passado nenhum parâmetro
  if (!animal) {
    arrayAnimals.push(paramVoid());
    // console.log(arrayAnimals);
    return arrayAnimals;
  }
  let valueGender = false; // Define a propriedade gênero inicialmente para false
  let quantidadeAnimais = 0;
  let retornoDoAnimal = {};
  const possuiGenero = Object.keys(animal).includes('gender'); // Verifica se o obj animal possui gender definido.
  // console.log(`Busca dos animais possui gênero: ${possuiGenero}`);

  if (possuiGenero) {
    // console.log("Possui Gênero!!!");
     // Retorna um array com todos os animais da espécie
    retornoDoAnimal = species.find((specie) => (specie.name === animal.specie));
    // Faz um filter para capturar apenas os animais que possuem o gênero passado
    // console.log(retornoDoAnimal.residents);
    const retornoDoAnimal2 = retornoDoAnimal.residents.map( (cadaAnimal) => {
      // console.log(`GÊNERO CADA ANIMAL: ${cadaAnimal.sex}`);
      // console.log(`GÊNERO BUSCADO: ${animal.gender}`);
      if (cadaAnimal.sex === animal.gender) {
        quantidadeAnimais += 1;
      }
    });
  }

  if (!possuiGenero) {
    // console.log("Não Possui Gênero!!!");
    retornoDoAnimal = species.find((specie) => (specie.name === animal.specie));
    quantidadeAnimais = retornoDoAnimal.residents.length;
  }
  return quantidadeAnimais;
}
// const argumentGender = { specie: 'penguins', gender: 'female' };
// const argument = { specie: 'penguins' };
// console.log(countAnimals());
// console.log(countAnimals(argument));
// console.log(countAnimals(argumentGender));

module.exports = countAnimals;

// LÓGICA DA FUNÇÃO:
// ** Contabiliza quantidade de animais
// ** Se nenhum parâmetro é passado, retorna um objeto { nomeDoAnimal: value };
// ** Se é passada somente a espécie, é retornado todos os animais daquela espécie
// ** Se é passado um animal e seu gênero, é retornado todos os animais daquela espécie e gênero
