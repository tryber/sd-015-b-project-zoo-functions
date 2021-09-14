const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const printAnimals = {};

function countAnimals(animal) {
  if (!animal) {
    species.forEach((specie) => {
      printAnimals[specie.name] = specie.residents.length;
    });
    return printAnimals;
  } if (!animal.gender) {
    return species.find((animals) => animals.name === animal.specie).residents.length;
  }
}

module.exports = countAnimals;

// Esta função é responsável por contabilizar a quantidade de animais de cada espécie.
// Sem parâmetros, retorna as espécies e sua quantidade;
// Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
// Recebendo como parâmetro um objeto com a chave specie e sex, retorna um número, a quantidade de animais daquela espécie, no gênero selecionado.
