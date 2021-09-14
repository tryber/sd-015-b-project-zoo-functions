const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(...ids) {
  // seu código aqui
  const result = ids.map((id) => {
    const idSelected = data.employees.filter((employee) => employee.id === id);
    const idAnimal = idSelected[0].responsibleFor[0];
    const animail = species.filter((an) => an.id === idAnimal);
    const oldAnimail = animail[0].residents.sort((a, b) => b.age - a.age)[0];
    const { name, sex, age } = oldAnimail;
    return [name, sex, age];
  });
  if (ids.length === 1) return result[0];
  return result;
}

module.exports = getOldestFromFirstSpecies;
