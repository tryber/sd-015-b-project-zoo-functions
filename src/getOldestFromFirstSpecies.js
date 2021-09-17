const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeName = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = data.species.find((kind) => kind.id === employeeName).residents;
  return Object.values(oldestAnimal.reduce((act, cnt) => ((act.age < cnt.age) ? cnt : act)));
};

module.exports = getOldestFromFirstSpecies;
