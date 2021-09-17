const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const people = () => employees.map(({ id, firstName, lastName, responsibleFor }) => {
  const infos = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: [],
    locations: [],
  };
  for (let i = 0; i < responsibleFor.length; i += 1) {
    infos.species.push(species.find((kind) => kind.id === responsibleFor[i]).name);
    infos.locations.push(species.find((kind) => kind.id === responsibleFor[i]).location);
  }
  return infos;
});

function getEmployeesCoverage(person) {
  if (!person) return people();

  if (!people().some((idv) => (idv.id === person.id || idv.fullName.includes(person.name)))) {
    throw new Error('Informações inválidas');
  }

  return people().find((idv) => (idv.id === person.id || idv.fullName.includes(person.name)));
}

module.exports = getEmployeesCoverage;
