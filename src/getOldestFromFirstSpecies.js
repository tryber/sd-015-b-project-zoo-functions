const { employees, species } = require('../data/zoo_data');

const getOldest = (animais) => {
  let maior = 0;
  animais.forEach(({ age }) => {
    if (age > maior) maior = age;
  });
  return maior;
};

function getOldestFromFirstSpecies(employeeId) {
  const animalId = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const animais = (species.find((especie) => especie.id === animalId).residents);
  const oldest = getOldest(animais);
  return Object.values(animais.find(({ age }) => age === oldest));
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
