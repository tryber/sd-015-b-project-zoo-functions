const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, item) => {
    const findIds = data.species.find((specie) => item === specie.id);
    acc.push(findIds);
    return acc;
  }, []);
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));

module.exports = getSpeciesByIds;
