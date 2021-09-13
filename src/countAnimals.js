const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = ({ specie: specieName, gender } = {}) => {
  let count;

  if (typeof specieName === 'undefined') {
    count = species.reduce(
      (total, specie) => ({ ...total, [specie.name]: specie.residents.length }), {},
    );
  } else if (typeof gender === 'undefined') {
    count = species.find((specie) => specie.name === specieName).residents.length;
  } else {
    count = species
      .find((specie) => specie.name === specieName)
      .residents.filter((resident) => resident.sex === gender).length;
  }

  return count;
};

module.exports = countAnimals;

console.log(countAnimals());
