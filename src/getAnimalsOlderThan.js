const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

console.log(species);
function getAnimalsOlderThan(animal, age) {
// todas as species - dentro tem o name da especie tem os residentes e dentro tem o name/age de cada animal
// a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
  const nomeSpecie = species.find((specie) => specie.name === animal);
  // verifica se o parametro passado em aninal é de fato um nome de especie no arquivo data
  return nomeSpecie.residents.every((resident) => resident.age >= age);
  // retorna true se a idade de CADA um listado dentro de residentes (onde tem name/age) é a minima do parametro
}

module.exports = getAnimalsOlderThan;
