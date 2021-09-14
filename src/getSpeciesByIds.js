const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const resultado = [];
  ids.forEach((id) => {
    resultado.push(data.species.find((specie) => specie.id === id));
  });
  return resultado;
}

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
