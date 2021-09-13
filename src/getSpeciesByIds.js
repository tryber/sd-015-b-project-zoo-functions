const data = require('../data/zoo_data');

const { species } = data;

const findAnimals = (id) => species.find((element) => ((element.id === id) ? element : undefined));

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) {
    return [];
  }

  const animals = ids.map((id) => findAnimals(id));
  return animals;
}

module.exports = getSpeciesByIds;
