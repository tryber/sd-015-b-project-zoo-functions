const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let finde = ''
  const specie = species.filter(elem => elem.name === animal)
  specie.find(elem => {
    finde = elem.residents.map(elem2 => elem2.age >= age)
    retorno = finde.every(elem => elem === true)
})
  return retorno
}
module.exports = getAnimalsOlderThan;
