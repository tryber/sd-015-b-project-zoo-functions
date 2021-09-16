const data = require('../data/zoo_data');

// [
//   {
//     id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     fullName: 'Nigel Nelson',
//     species: [ 'lions', 'tigers' ],
//     locations: []
//   },
//   {
//     id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
//     fullName: 'Burl Bethea',
//     species: [ 'lions', 'tigers', 'bears', 'penguins' ],
//     locations: []
//   },
//   {
//     id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
//     fullName: 'Ola Orloff',
//     species: [ 'otters', 'frogs', 'snakes', 'elephants' ],
//     locations: []
//   },
//   {
//     id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//     fullName: 'Wilburn Wishart',
//     species: [ 'snakes', 'elephants' ],
//     locations: []
//   },
//   {
//     id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
//     fullName: 'Stephanie Strauss',
//     species: [ 'otters', 'giraffes' ],
//     locations: []
//   },
//   {
//     id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//     fullName: 'Sharonda Spry',
//     species: [ 'otters', 'frogs' ],
//     locations: []
//   },
//   {
//     id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
//     fullName: 'Ardith Azevado',
//     species: [ 'tigers', 'bears' ],
//     locations: []
//   },
//   {
//     id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
//     fullName: 'Emery Elser',
//     species: [ 'lions', 'bears', 'elephants' ],
//     locations: []
//   }
// ]

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

// creates array with all names and last names
function createNameLastNameArray(returnArr) {
  const employeeNames = [];
  employeeNames.push(...returnArr.map((employee) => employee.fullName));
  const employeeNamesSplit = employeeNames.map((employee) => employee.split(' ')).flat();
  return employeeNamesSplit;
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
