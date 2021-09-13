const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  ids.forEach((id) => {
    const animals = data.species.filter((specie) => id === specie.id);
    return animals;
  });
}

module.exports = getSpeciesByIds;
