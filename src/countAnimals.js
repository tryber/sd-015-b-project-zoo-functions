const data = require('../data/zoo_data');

const animais = data.species;

function countAnimals(object) {
  if (object === undefined) {
    return null;
  }
  const animal = object.specie;
  const genero = object.gender;
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

console.log(countAnimals());
module.exports = countAnimals;
