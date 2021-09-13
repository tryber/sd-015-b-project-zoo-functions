const data = require('../data/zoo_data');

const especies = data.species;
function getSpeciesByIds(...ids) {
  const resultado = [];
  ids.forEach((acc) =>
    resultado.push(
      especies.find((id) => {
        if (id.id === acc) {
          return id;
        } return null;
      }),
    ));
  return resultado;
}

module.exports = getSpeciesByIds;
