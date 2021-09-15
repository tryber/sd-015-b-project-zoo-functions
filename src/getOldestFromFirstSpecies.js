/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const test = employees.filter((elemento) => elemento.id === id);

  const idAnimal = test[0].responsibleFor.shift();

  const buscarIdAnimal = species.filter((elemento) => elemento.id === idAnimal);

  const buscarAnimalMaisVelho = buscarIdAnimal[0].residents.reduce((acumulador, elemento) => {
    if (elemento.age > acumulador.age) {
      return elemento;
    }
    return acumulador;
  });
  const resultado = Object.values(buscarAnimalMaisVelho);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
