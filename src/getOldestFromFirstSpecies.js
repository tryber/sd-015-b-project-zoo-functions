const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((_employee) => _employee.id === id);
  const firstSpecies = species.find((_species) => _species.id === employee.responsibleFor[0]);
  let higherAge = 0;
  firstSpecies.residents.forEach((resident) => {
    if (resident.age > higherAge) {
      higherAge = resident.age;
    }
  });
  const oldest = firstSpecies.residents.find((resident) => higherAge === resident.age);
  return [oldest.name, oldest.sex, oldest.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
