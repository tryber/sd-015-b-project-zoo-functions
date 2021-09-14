const data = require('../data/zoo_data');

// funciona apenas com um ID
// function getSpeciesByIds(...ids) {
//   return data.species.filter((animal) => (animal.id === ids[0] ? animal : false));
// }

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.includes(animal.id));
}

// let actual = getSpeciesByIds();

// console.log(actual);

// actual = getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

// console.log('_______________');

// console.log(actual);

// actual = getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// );

// console.log('_______________');

// console.log(actual);

module.exports = getSpeciesByIds;
