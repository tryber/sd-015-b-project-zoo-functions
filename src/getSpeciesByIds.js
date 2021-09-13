const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => species.find((animais) => animais.id === id));
}

module.exports = getSpeciesByIds;
