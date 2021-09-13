const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  const newArray = [];
  species.forEach((specie) => {
    ids.forEach((id) => {
      if (id === specie.id) {
        newArray.push(specie);
      }
    });
  });
  return newArray;
}

module.exports = getSpeciesByIds;
