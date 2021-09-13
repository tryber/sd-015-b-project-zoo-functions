const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  species.map( (specie) => {
    console.log(specie.id); // [DEBUG] Imprime id de todas as Espécies
    if (specie.id === ids) {


    }
  })
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))
module.exports = getSpeciesByIds;
