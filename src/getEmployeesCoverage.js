const data = require('../data/zoo_data');

const getSpeciesAndLocation = (arrOfSpeciesId) => {
  const arrOfSpecies = [];
  const arrOfSpeciesLocation = [];

  data.species.forEach(({ id, name, location }) => {
    if (arrOfSpeciesId.includes(id)) {
      arrOfSpecies.push(name);
      arrOfSpeciesLocation.push(location);
    }
  });

  return [[...arrOfSpecies], [...arrOfSpeciesLocation]];
};

const getAllEmployeesCoverage = () => {
  const employeeMap = data.employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const [arrOfSpecies, arrOfSpeciesLocation] = getSpeciesAndLocation(responsibleFor);
    const coverageObj = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: arrOfSpecies,
      locations: arrOfSpeciesLocation,
    };

    return coverageObj;
  });

  return employeeMap;
};

const verifyEmployeeSearch = (employeeCoverage) => (!employeeCoverage ? {} : employeeCoverage);

const getEmployeeCoverageByNameOrId = ({ name, id }, allEmployeeCoverage) => {
  const employeeCoverage = allEmployeeCoverage.find(({ id: employeeId, fullName }) => {
    const splitedName = fullName.split(' ');

    const isEmployeeFound = (id === employeeId) || (splitedName.includes(name));

    return isEmployeeFound;
  });

  const verifiedEmployeeCoverage = verifyEmployeeSearch(employeeCoverage);

  return verifiedEmployeeCoverage;
};

function getEmployeesCoverage(employeeInfo) {
  // seu código aqui
  const employeeCoverage = getAllEmployeesCoverage();

  if (employeeInfo === undefined) return employeeCoverage;

  const filteredEmployeeCoverage = getEmployeeCoverageByNameOrId(employeeInfo, employeeCoverage);

  const coverageLength = Object.entries(filteredEmployeeCoverage).length;

  if (coverageLength > 0) return filteredEmployeeCoverage;

  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
