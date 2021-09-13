const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const returnVariable = [];
  data.species.forEach((element) => {
    ids.forEach((id) => {
      if (element.id === id) {
        returnVariable.push(element);
      }
    });
  });
  return returnVariable;
}

module.exports = getSpeciesByIds;
