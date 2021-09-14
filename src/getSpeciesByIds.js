const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const resultado = [];
  ids.forEach((id) => {
    resultado.push(data.species.find((specie) => specie.id === id));
  });
  return resultado;
}

module.exports = getSpeciesByIds;
