const data = require('../data/zoo_data');

const especies = data.species;

function getAnimalsOlderThan(animal, age) {
  const animais = especies.find((element) => (element.name === animal));
  const ano = animais.residents;
  const idade = ano.every((anos) => anos.age >= age);
  return idade;
}
console.log(getAnimalsOlderThan('penguins', 3));
module.exports = getAnimalsOlderThan;
