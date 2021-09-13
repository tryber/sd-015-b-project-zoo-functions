const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return data.species.filter(({ id }) => ids.includes(id));
}

// ID TESTE('0938aa23-f153-4937-9f88-4858b24d6bce')
module.exports = getSpeciesByIds;

console.log(getSpeciesByIds());

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
