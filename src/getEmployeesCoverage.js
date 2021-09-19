const data = require('../data/zoo_data');

function findParameter(parameter) {
  const searchParameter = data.employees.find((findEmployee) => findEmployee.id === parameter.id
    || findEmployee.firstName === parameter.name
    || findEmployee.lastName === parameter.name);
  return searchParameter;
}
function findAnimals(employee) {
  const searchAnimals = employee.responsibleFor.map((id) => data.species
    .find((ani) => ani.id === id));
  return searchAnimals.map((animal) => animal.name);
}
function findLocation(locationAnimal) {
  const searchLocation = locationAnimal.responsibleFor.map((id) => data.species
    .find((ani) => ani.id === id));
  return searchLocation.map((animal) => animal.location);
}

/*  const acumulator = [];
data.employees.forEach((employee) => {
  acumulator.push({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: findAnimals(employee),
    location: findLocation(employee),
  });
});
return acumulator; */
/*  return data.employees.reduce((acumulator, employee) => {
   acumulator.push({
     id: employee.id,
     fullName: `${employee.firstName} ${employee.lastName}`,
     species: findAnimals(employee),
     location: findLocation(employee),
   });
   return acumulator;
 }, []); */
function whithParams() {
  const acumulator = [];
  data.employees.forEach((employee) => {
    const species = findAnimals(employee);
    const locations = findLocation(employee);
    acumulator.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species,
      locations,
    });
  });
  return acumulator;
}
function errorParams(parameter) {
  const status = findParameter(parameter);
  if (status === undefined) {
    throw new Error('Informações inválidas');
  }
  return status;
}
function getEmployeesCoverage(parameter) {
  if (!parameter) return whithParams();
  const searchParameter = findParameter(parameter);
  if (!searchParameter) return errorParams(parameter);
  const objectParameter = {};
  const location = findLocation(searchParameter);
  const findAnimalss = findAnimals(searchParameter);
  objectParameter.id = searchParameter.id;
  objectParameter.fullName = `${searchParameter.firstName} ${searchParameter.lastName}`;
  objectParameter.species = findAnimalss;
  objectParameter.locations = location;
  return objectParameter;
}

console.log(getEmployeesCoverage());
// getEmployeesCoverage({ name: 'Sharonda' });
// getEmployeesCoverage({ name: 'Spry' });
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });

module.exports = getEmployeesCoverage;

/* {
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  "fullName": "Sharonda Spry", // nome completo: firstName + lastName
  "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
} */
