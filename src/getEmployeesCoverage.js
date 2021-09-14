const data = require('../data/zoo_data');

function animalsIdToSpecies(ids) {
  return ids.map(
    (id) => data.species.find((element) => element.id === id).name,
  );
}

function animalsIdToLocations(ids) {
  return ids.map(
    (id) => data.species.find((element) => element.id === id).location,
  );
}

function generalEmployeesCoverage() {
  return data.employees.map((element) => {
    const { id, firstName, lastName, responsibleFor } = element;
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: animalsIdToSpecies(responsibleFor),
      locations: animalsIdToLocations(responsibleFor),
    };
  });
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return generalEmployeesCoverage();
  }
  const { name, id } = obj;
  const employeesCoverageFilter = generalEmployeesCoverage().find((element) => {
    const { fullName: fullNameElement, id: idElement } = element;
    const [firstNameElement, lastNameElement] = fullNameElement.split(' ');
    return (
      firstNameElement === name || lastNameElement === name || idElement === id
    );
  });
  if (employeesCoverageFilter !== undefined) {
    return employeesCoverageFilter;
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
