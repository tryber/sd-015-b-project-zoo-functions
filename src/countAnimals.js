const data = require('../data/zoo_data');

const animais = data.species;

function retornaTudo() {
  const tudo = {};
  animais.forEach((element) => {
    tudo[element.name] = element.residents.length;
  });
  return tudo;
}
function countAnimals(object) {
  if (object === undefined) {
    return retornaTudo();
  }
  const animal = object.specie;
  const genero = object.sex;
  const quantidade = animais.find((element) => element.name === animal);
  const numero = quantidade.residents.length;
  let contador = 0;
  quantidade.residents.forEach((element) => {
    if (element.sex === genero) {
      contador += 1;
    }
  });
  if (genero === undefined) {
    return numero;
  } return contador;
}

module.exports = countAnimals;
