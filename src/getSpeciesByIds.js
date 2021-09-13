const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const matchingIDs = [];
  const searchID = (inputId, index) => {
    matchingIDs[index] = species.find((specie) => (specie.id === inputId));
  };
  ids.forEach(searchID);
  return matchingIDs;
}

module.exports = getSpeciesByIds;
