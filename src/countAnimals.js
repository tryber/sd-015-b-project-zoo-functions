const data = require('../data/zoo_data');

const { species } = data;

function paramVoid() {
  // Implementa função reduce!
  // FONTE:https://www.instagram.com/p/BziTc90D382/
  const initialValue = {};
  const transformArray = species.reduce((obj, specie) => {
    return {
      ...obj,
      [specie.name]: specie.residents.length,
    };
  }, initialValue);
  return transformArray;
}

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const functionResult = paramVoid();
    return functionResult;
  }
  let quantidadeAnimais = 0;
  let retornoDoAnimal = {};
  const possuiGenero = Object.keys(animal).includes('gender');
  if (possuiGenero) {
    retornoDoAnimal = species.find((specie) => (specie.name === animal.specie))
      .residents.map((cadaAnimal) => {
        if (cadaAnimal.sex === animal.gender) {
          quantidadeAnimais += 1;
        }
        return quantidadeAnimais;
      });
  }
  if (!possuiGenero) {
    retornoDoAnimal = species.find((specie) => (specie.name === animal.specie));
    quantidadeAnimais = retornoDoAnimal.residents.length;
  }
  return quantidadeAnimais;
}

module.exports = countAnimals;

// LÓGICA DA FUNÇÃO:
// ** Contabiliza quantidade de animais
// ** Se nenhum parâmetro é passado, retorna um objeto { nomeDoAnimal: value };
// ** Se é passada somente a espécie, é retornado todos os animais daquela espécie
// ** Se é passado um animal e seu gênero, é retornado todos os animais daquela espécie e gênero
