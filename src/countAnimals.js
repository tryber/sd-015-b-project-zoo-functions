const data = require('../data/zoo_data');

const { species } = data;

const returnSomeNumberWithGender = (search, sex) => {
  let sum = 0;
  search.residents.forEach((elemento) => {
    sum = (elemento.sex === sex) ? sum += 1 : sum;
  });
  return sum;
};

const returnSomeNumber = (animal) => {
  const { specie: name, sex } = animal;
  let result;

  const search = species.find((elemento) => elemento.name === name);
  result = search.residents.length;

  if (sex) result = returnSomeNumberWithGender(search, sex);

  return result;
};

function countAnimals(animal) {
  let result = '';
  result = species.reduce((acc, elemento) => {
    const { name, residents } = elemento;
    const array = acc;
    array[name] = residents.length;
    return array;
  }, {});

  if (animal) result = returnSomeNumber(animal);

  return result;
}

module.exports = countAnimals;
