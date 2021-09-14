const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function countAnimals({ specie = undefined, sex = false } = {}) {
  if (specie === undefined) {
    return species.reduce((total, { name, residents }) => {
      Object.assign(total, { [name]: residents.length });
      return total;
    }, {});
  }
  if (!sex) {
    return species.find((element) => element.name === specie).residents.length;
  }
  return species.find((element) => element.name === specie).residents.filter((element) =>
    element.sex === sex).length;
}

module.exports = countAnimals;
