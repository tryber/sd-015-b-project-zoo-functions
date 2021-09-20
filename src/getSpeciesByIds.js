const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((idPesquisado) => ids.includes(idPesquisado.id));
}

module.exports = getSpeciesByIds;
