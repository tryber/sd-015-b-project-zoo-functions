const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = ({ specie: specieName, sex } = {}) => {
  let count;

  if (typeof specieName === 'undefined') {
    count = species.reduce(
      (total, specie) => ({ ...total, [specie.name]: specie.residents.length }), {},
    );
  } else if (typeof sex === 'undefined') {
    count = species.find((specie) => specie.name === specieName).residents.length;
  } else {
    count = species
      .find((specie) => specie.name === specieName)
      .residents.filter((resident) => resident.sex === sex).length;
  }

  return count;
};

module.exports = countAnimals;
