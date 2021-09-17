const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getSpecie = data.species.filter((animals) => animals.name === animal);
  const reduceEspecieList = getSpecie.map((idade) => idade).reduce((reduz, atual) => reduz + atual);
  const getResidents = reduceEspecieList.residents;
  const getAges = getResidents.map((idade) => idade.age);
  const returnsBool = getAges.map((ages) => age <= ages);
  const getBool = returnsBool.some((falso) => falso === false);
  if (getBool === true) {
    return false;
  }
  return true;
}

module.exports = getAnimalsOlderThan;
