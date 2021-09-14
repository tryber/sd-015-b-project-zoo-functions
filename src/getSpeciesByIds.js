const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const output = [];

  ids.forEach((element) => species.filter(({ id }, index) => {
    if (id === element) {
      output.push(species[index]);
    } return undefined;
  }));
  return output;
}

module.exports = getSpeciesByIds;
