/* eslint-disable array-callback-return */
const data = require('../data/zoo_data');

const especies = data.species;
function getSpeciesByIds(...ids) {
  const resultado = [];
  ids.forEach((acc) =>
    resultado.push(
      especies.find((id) => {
        if (id.id === acc) {
          return id;
        }
      }),
    ));
  return resultado;
}

module.exports = getSpeciesByIds;
