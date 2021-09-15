const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // return data.species.map((element) => {
  //   return ids.some((id) => element.id === id) ? element : false;
  // }).filter((element) => element !== false);
  const arrayId = [];
  ids.forEach((id) => {
    arrayId.push(data.species.find((element) => element.id === id));
  });
  return arrayId;
}

module.exports = getSpeciesByIds;
