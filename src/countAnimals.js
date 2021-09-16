const { species } = require('../data/zoo_data');

const getAnimalsAmount = () => species.reduce((acc, { name, residents }) => {
  acc[name] = residents.length;
  return acc;
}, {});

const countFemale = (resid) => {
  let result = 0;
  resid.forEach(({ sex }) => {
    if (sex === 'female') result += 1;
  });
  return result;
};

function countAnimals(parameter) {
  const animalsAmount = getAnimalsAmount();
  if (!parameter) return animalsAmount;
  const animalValue = Object.values(parameter);
  if (animalValue.length === 1) return animalsAmount[animalValue];//
  const residentes = species.find(({ name }) => name === animalValue[0]).residents;
  if (animalValue.length === 2) return countFemale(residentes);
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
