const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// eu consutei o repositorio do José Erivam
// https://github.com/tryber/sd-015-b-project-zoo-functions/pull/99/commits/268d632617f79ce46601b725f2fab80f8bbdf9ef

function getAnimalsOlderThan(animal, age) {
  const animalzinho = species.find((element) => element.name === animal);
  const idade = animalzinho.residents.every((elemento) => elemento.age >= age);
  return idade;
}

module.exports = getAnimalsOlderThan;
