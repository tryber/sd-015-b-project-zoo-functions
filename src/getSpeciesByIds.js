const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  species.forEach((element) => {
    ids.forEach((id) => {
      if (element.id === id) {
        result.push(element);
      }
    });
  });
  return result;
}

module.exports = getSpeciesByIds;
