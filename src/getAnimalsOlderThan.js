const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species
  .find((animals) => animals.name === animal)
  .residents.every((resid) => resid.age > age);
//  species.find passa um animals.name como parametro e assim
//  compara com o parametro name passado. apos isso acessa a key
//  residents e diz que todo(every) residente que tenha a age >
//  age passada como parametro deve ser retornada como true e menor como false.

module.exports = getAnimalsOlderThan;
