const zooData = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = [];

  if (ids.length === 0) return species;

  for (let i = 0; i < ids.length; i += 1) {
    species.push(zooData.species.filter((spcs) => spcs.id === ids[i])[0]);
  }

  return species;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
module.exports = getSpeciesByIds;
