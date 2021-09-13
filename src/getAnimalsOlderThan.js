const data = require('../data/zoo_data');

// anim acha o animal com o nome do parametro e depois o .residents.every retorna true
// ou false se as idades forem maiores q a passada
function getAnimalsOlderThan(animal, age) {
  const anim = data.species.find((specie) => specie.name === animal);
  return anim.residents.every((specie) => specie.age > age);
}

module.exports = getAnimalsOlderThan;
