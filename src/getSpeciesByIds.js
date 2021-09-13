const data = require('../data/zoo_data');

// filtra em cada especie se o parametro inclui algum ID de alguma delas;
function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}
module.exports = getSpeciesByIds;
