const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  let matchingIDs = [];
 const searchID = (inputId, index) => {
   matchingIDs[index] = species.find((species) => (species.id === inputId));
 };
 ids.forEach(searchID);
return matchingIDs;
}

module.exports = getSpeciesByIds;
