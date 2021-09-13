const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resultado = [];
  ids.forEach((id) => {
    resultado.push(species.find((animais) => animais.id === id));
  });
  return resultado;
}

module.exports = getSpeciesByIds;
