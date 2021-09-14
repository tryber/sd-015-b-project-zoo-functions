const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal, gender) {
  const allSpecies = species.map((specie) => specie.name);
  const howManyAnimals = species.map((specie) => specie.residents.length);
  const reduceSpecies = species.reduce((acc, cur, i, ar) => {
    // console.log('-------ACC é:', acc);
    // console.log('-------CUR é:', cur);
    // console.log('-------IND é:', i);
    // console.log('-------ACC é:', acc);
    acc[allSpecies[i]] = howManyAnimals[i];
    return acc;
  }, {});
  // console.log('-->  allSpecies é:', allSpecies);
  // console.log('-->  howManyAnimals é:', howManyAnimals);
  // const allAnimals = {
  //   allSpecies: 'teste',
  // };
  return reduceSpecies;
}
console.log(countAnimals());
// console.log(data.species.length)

module.exports = countAnimals;
