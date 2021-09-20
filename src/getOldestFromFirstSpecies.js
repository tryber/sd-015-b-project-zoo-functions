const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstManaged = employees.filter((employee) => employee.id === id)[0].responsibleFor[0];
  const oldest = species.filter((animal) => animal.id === firstManaged)[0].residents
    .reduce((acc, namedAnimal) => {
      if (acc.age > namedAnimal.age) return acc;
      return namedAnimal;
    });
  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
