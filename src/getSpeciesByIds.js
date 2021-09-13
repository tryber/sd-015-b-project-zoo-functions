const data = require('../data/zoo_data');

const { species } = data;

const verify = (elemento) => species.find((el) => el.id === elemento);

function getSpeciesByIds(...ids) {
  const valores = ids.map((elemento) => {
    const result = verify(elemento);
    return result;
  });
  return valores;
}

module.exports = getSpeciesByIds;
