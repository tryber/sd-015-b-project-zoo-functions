const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsible = data.employees.find((a) => a.id === id);
  const [firstAnimalId] = responsible.responsibleFor;
  const animal = data.species.find((b) => b.id === firstAnimalId);
  let higherAge = 0;
  animal.residents.forEach((a) => {
    if (a.age > higherAge) {
      higherAge = a.age;
    }
  });
  const { age, name, sex } = animal.residents.find((c) => c.age === higherAge);
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
