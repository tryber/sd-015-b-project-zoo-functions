const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = ids.reduce((acc, codigo) => {
    const animal = data.species.find(({ id }) => id === codigo);
    acc.push(animal);

    return acc;
  }, []);

  return result;
}

module.exports = getSpeciesByIds;
