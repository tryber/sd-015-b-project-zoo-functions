const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // Usar o find para encontrar o primeiro animal cuidado do responsavel de acordo com o id
  const howAnimal = employees.find((employee) => employee.id.includes(id));
  const firtAnimal = howAnimal.responsibleFor[0];
  const getSpecie = species.find((specie) => specie.id.includes(firtAnimal)).residents;
  const whichOlder = getSpecie.reduce((bigAge, age) => (bigAge.age > age.age ? bigAge : age));
  const olderAnimal = [];
  olderAnimal.push(whichOlder.name);
  olderAnimal.push(whichOlder.sex);
  olderAnimal.push(whichOlder.age);
  return olderAnimal;
  // Usar o reduce pra pegar o animal mais velho
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
