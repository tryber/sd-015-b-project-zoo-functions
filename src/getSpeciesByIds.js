const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, item) => {
    const txt = data.species.find(((element) => element.id === item));
    acc.push(txt);
    return acc;
  }, []);
}

module.exports = getSpeciesByIds;
