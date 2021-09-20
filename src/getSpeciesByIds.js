const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* Desenvolvido com base na dúvida/explicação da tread do Geovanni Cardoso */
function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((animals) => animals.id === id));
}

module.exports = getSpeciesByIds;
