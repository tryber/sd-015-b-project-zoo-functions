const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const getOldestFromFirstSpecies = (id) => {
  const selectedEmployee = data.employees.find(({ id: employeeId }) => employeeId === id);
  const { responsibleFor: species } = selectedEmployee;
  const firstSpecie = getSpeciesByIds(species[0]);
  const { residents } = firstSpecie[0];
  const oldest = residents.reduce((acc, animal) => (acc.age >= animal.age ? acc : animal));
  return Object.values(oldest);
};

module.exports = getOldestFromFirstSpecies;
