// const data = require('../data/zoo_data');

// const SpecieById = (employee) => employee.responsibleFor
//   .map((id) => data.species.find((specie) => specie.id === id).name);

// const getLocations = (employee) => employee.responsibleFor

//   .map((id) => data.species.find((specie) => specie.id === id).location);

// const allEmployeesCoverage = () => {
//   const allEmployees = [];

//   data.employees.forEach((emp) => {
//     const employeeCoverage = {
//       id: emp.id,

//       fullName: `${emp.firstName} ${emp.lastName}`,

//       species: SpecieById(emp),

//       locations: getLocations(emp),

//     };

//     allEmployees.push(employeeCoverage);
//   });

//   return allEmployees;
// };

// const objectEmployee = (emp) => ({

//   id: emp.id,

//   fullName: `${emp.firstName} ${emp.lastName}`,

//   species: SpecieById(emp),

//   locations: getLocations(emp),

// });

// const getEmployeeCoverage = (options) => {
//   const { name, id } = options;

//   const searchByFirstName = data.employees.find((emp) => emp.firstName === name);

//   const searchByLastName = data.employees.find((emp) => emp.lastName === name);

//   const searchById = data.employees.find((emp) => emp.id === id);

//   if (searchByFirstName) { return objectEmployee(searchByFirstName); }

//   if (searchByLastName) { return objectEmployee(searchByLastName); }

//   if (searchById) { return objectEmployee(searchById); }

//   throw new Error('Informações inválidas');
// };

// function getEmployeesCoverage(options) {
//   if (!options) { return allEmployeesCoverage(); }

//   return getEmployeeCoverage(options);
// }

// module.exports = getEmployeesCoverage;
// const { hours, species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

// const daysWeek = Object.keys(hours);
// const Hours = Object.values(hours);
// const List = Object.values(species);
// const ListNames = List.map((specie) => specie.name);

// // Busca horario de abertura e horario de fechamento
// function officeHourFunc() {
//   return Hours.map((element) => {
//     if (element.open === 0 && element.close === 0) {
//       return 'CLOSED';
//     }
//     return `Open from ${element.open}am until ${element.close}pm`;
//   });
// }

// function exhibitionFunc() {
//   let exhibitionPush = [];
//   const exhibition = [];
//   daysWeek.forEach((day) => {
//     List.filter((specie) => {
//       if (specie.availability.includes(day)) {
//         exhibitionPush.push(specie.name);
//       }
//       return exhibition;
//     });
//     if (day === 'Monday') {
//       exhibition.push('The zoo will be closed!');
//     }
//     exhibition.push(exhibitionPush);
//     exhibitionPush = [];
//   });
//   return exhibition;
// }
// console.log(exhibitionFunc());
// function ScheduleComplete() {
//   const Schedule = {};
//   daysWeek.forEach((day, index) => {
//     Schedule[day] = {
//       officeHour: officeHourFunc()[index],
//       exhibition: exhibitionFunc()[index],
//     };
//   });
//   return Schedule;
// }
// Consultei o repositório do Lucas Peres para resolver essa parte.
// * link: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/117/commits/35b04ae8048f65020a981c14a0d1331707fac826

// function getSchedule(Targ) {
//   if (daysWeek.includes(Targ)) {
//     const ScheduleDay = {};
//     const test = Object.entries(ScheduleComplete()).filter((day) => day.includes(Targ))[0][1];
//     ScheduleDay[Targ] = test;
//     return ScheduleDay;
//   }
//   if (ListNames.includes(Targ)) {
//     return Object.values(species).find((specie) => specie.name === Targ).availability;
//   }
//   return ScheduleComplete();
// }

// module.exports = getSchedule;
// console.log(getSchedule());

// // oldtestAnimal
// // const { employees, species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

// function getOldestFromFirstSpecies(id) {
//   const spec = employees.find((element) => element.id === id).responsibleFor[0];
//   const bicho = species.find((element) => element.id === spec).residents;
//   const old = bicho.sort((age1, age2) => age2.age - age1.age)[0];
//   return [old.name, old.sex, old.age];
// }

// module.exports = getOldestFromFirstSpecies;
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
