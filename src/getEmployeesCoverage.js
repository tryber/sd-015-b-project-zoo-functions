const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployesParam(employes) {
  // buscar pessoa por id, name e lasName
  const getEmployes = employees.find((person) => person.id === employes.id
  || person.firstName === employes.name
      || person.lastName === employes.name);
  if (typeof getEmployes === 'undefined') {
    throw new Error('Informações inválidas');
  }
  return getEmployes;
}

function getSpecieEmploy(employe) {
  const getSpecie = species.filter((specie) => employe.includes(specie.id));
  return getSpecie;
}

function createObj(employe, specieAndLocal) {
  const newObject = {
    id: employe.id,
    fullName: `${employe.firstName} ${employe.lastName}`,
    species: specieAndLocal.map((specie) => specie.name),
    locations: specieAndLocal.map((local) => local.location),
  };
  return newObject;
}

function getEmployeesCoverage(employes) {
  // seu código aqui
  if (typeof employes === 'undefined') {
    const allEmployes = [];
    employees.forEach((employe) => {
      allEmployes.push(createObj(employe, getSpecieEmploy(employe.responsibleFor)));
    });
    return allEmployes;
  }
  const getEmployes = getEmployesParam(employes);
  const speciesResponsable = getEmployes.responsibleFor;
  const getSpecieEmployeeAndLocal = getSpecieEmploy(speciesResponsable);

  return createObj(getEmployes, getSpecieEmployeeAndLocal);
}

module.exports = getEmployeesCoverage;
console.log(getEmployeesCoverage());
