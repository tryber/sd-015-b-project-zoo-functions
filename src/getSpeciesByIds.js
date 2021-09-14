const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length > 1) {
    return data.species.filter((specie, index) => specie.id === ids[index]);
  }
  return data.species.filter((specie) => specie.id === ids[0]);
  // return ids.map((id) =>
  // data.species.filter((specie, index) =>
  // specie.id === id));
}

module.exports = getSpeciesByIds;
