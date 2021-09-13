/* eslint-disable array-callback-return */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// function getSpeciesByIds(...ids) {
//   const resultado = ids.map((elemento) => species.filter((elemento2) => elemento2.id === elemento));
//   return resultado;
// }

// function getSpeciesByIds(...ids) {
//   let test = [];
//   ids.forEach((idd) => {
//     test.push(species.filter((elemento) => elemento.id === idd);
//   });
//   return test;
// }

function getSpeciesByIds(...ids) {
  const resultado = species.filter((elemento) => ids.includes(elemento.id));
  return resultado;
}

module.exports = getSpeciesByIds;
