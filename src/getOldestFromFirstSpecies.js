const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const nomeGerente = employees.find((elemento) => elemento.id === id);

  const nomeAnimal = nomeGerente.responsibleFor.find((elemento) => elemento[0]);

  const objetoAnimal = species.find((elemento) => elemento.id === nomeAnimal);

  const arrayObjeto = objetoAnimal.residents;

  const ordenandoIdade = arrayObjeto.sort((a, b) => b.age - a.age);

  return Object.values(ordenandoIdade[0]);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
