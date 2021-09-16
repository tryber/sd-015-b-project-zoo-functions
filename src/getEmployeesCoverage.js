const data = require('../data/zoo_data');

function mapNamesToLoc(employee) {
  const { species: employeeSpecies } = employee;
  const animals = data.species;
  // filters animals if animal is in employeeSpecies
  const selectedSpecies = animals.filter((specie) => employeeSpecies.includes(specie.name));
  // creates array with filtered animals locations
  const speciesLocations = selectedSpecies.map((specie) => specie.location);
  const employeeLocations = employee;
  employeeLocations.locations = speciesLocations;
}

function getLocations(returnArr) {
  // calls mapNamesToLoc for each employee
  returnArr.forEach((employee) => mapNamesToLoc(employee));
}

// replaces ID with animal name at 'species' key of returnArr
function mapIdsToNames(employee) {
  const { species: id } = employee;
  const animals = data.species;
  // filters animals if id is in employee.species
  const selectedSpecies = animals.filter((specie) => id.includes(specie.id));
  // creates array with filtered animals' names
  const speciesNames = selectedSpecies.map((specie) => specie.name);
  const employeeSpecies = employee;
  // replaces IDs with names
  employeeSpecies.species = speciesNames;
}

function getSpecies(returnArr) {
  // calls mapIdsToNames for each employee
  returnArr.forEach((employee) => mapIdsToNames(employee));
}

// filters array given options, works for id, full name, first name and last name
function filterArray(returnArr, options) {
  const { name, id } = options;
  let filteredReturnArr;
  if (id) {
    // filters array for employee with id === id, returns an array
    filteredReturnArr = returnArr.filter((employee) => employee.id === id);
  }
  if (name) {
    // filters array for employee with fullName including what is passed as name, returns an array
    filteredReturnArr = returnArr.filter((employee) => employee.fullName.includes(name));
  }
  // removes filteredReturnArr from outer array, returns it as an object
  const filteredObj = Object.assign({}, ...filteredReturnArr);
  return filteredObj;
}

// creates array with all names and last names to be used by checkOptions
function createNameLastNameArray(returnArr) {
  const employeeNames = [];
  employeeNames.push(...returnArr.map((employee) => employee.fullName));
  const employeeNamesSplit = employeeNames.map((employee) => employee.split(' ')).flat();
  return employeeNamesSplit;
}

function checkOptions(returnArr, options) {
  const namesList = createNameLastNameArray(returnArr);
  const { name, id } = options;
  let isNameValid = false;
  // checks if first or last name are in namesList
  if (name) {
    const splitName = name.split(' ');
    // if first or last name are in namesList, returns true
    isNameValid = splitName.some((part) => namesList.includes(part));
  }
  const isValid = returnArr.some((emp) => (emp.id === id || isNameValid));
  if (!isValid) {
    throw new Error('Informações inválidas');
  } else {
    return filterArray(returnArr, options);
  }
}

// makes returnArr structure
function makeReturnArr() {
  const returnArr = data.employees;
  const newReturnArr = returnArr.map((employee) => (
    {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor,
      locations: [],
    }
  ));
  return newReturnArr;
}

function getEmployeesCoverage(options) {
  const returnArr = makeReturnArr();
  getSpecies(returnArr);
  getLocations(returnArr);
  // console.log(returnArr);
  if (options) {
    const filteredArr = checkOptions(returnArr, options);
    return filteredArr;
  }
  return returnArr;
}

module.exports = getEmployeesCoverage;
