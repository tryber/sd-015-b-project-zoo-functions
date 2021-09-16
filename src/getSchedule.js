// const data = require('../data/zoo_data');

const { species, hours } = data;
const closedMessage = `'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!'`;

const days = Object.keys(hours);
const allSpecies = species.map( (specie) => {
  // allspecies.push(specie.name);
  return specie.name;
});

// function argNull() {

//   const dataObj = {};

//   days.forEach((day) => {
//     const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
//     const animaisExibicao = species
//     .filter( (animal) => animal.availability
//     .includes(day))
//     .map((dayN) => dayN.name);
//     if (day === 'Monday') {
//       dataObj[day] = `{ ${closedMessage} }`;
//     } else {
//       dataObj[day] = `{ 'officeHour': '${messageOffice}', 'exhibition': [ ${animaisExibicao.join(', ')}]}`;
//     }
//   });
//   return dataObj;
// }

// function getSchedule(scheduleTarget) {
//   // seu código aqui
//   let objetoRetorno = {};
//   const dayFound = days.includes(scheduleTarget); // Verifica se argumento passado é um Dia
//   const animalFound = allSpecies.includes(scheduleTarget); // Verifica se argumento passado é um Animal

//   if (!dayFound && !animalFound) return argNull(); // FUNÇÃO OK

//   if (dayFound || animalFound) {
//     if (dayFound) {
//       days.find( (day) => {
//         if (day === scheduleTarget) {
//           const messageOffice = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
//           const animaisExibicao = species
//           .filter( (animal) => animal.availability
//               .includes(day))
//                 .map((dayM) => `'${dayM.name}'`);
//           if (day === 'Monday') {
//             objetoRetorno[day] = `{ ${closedMessage} }`;
//             } else {
//               objetoRetorno[day] = `{
//               'officeHour': '${messageOffice}',
//                 'exhibition': [ ${animaisExibicao.join(`, `)} ],
//                 },`;
//             }
//           return objetoRetorno;
//         }
//       });
//       return objetoRetorno;
//     }
//     if (animalFound) {
//       species.find( (specie) => {
//         if (specie.name === scheduleTarget) {
//           objetoRetorno = specie.availability;
//           return objetoRetorno;
//         }
//       });
//     }
//   }
//   return objetoRetorno;
// }

// // console.log(getSchedule('Thursday')); // Elemento Dia
// // console.log(getSchedule('Wednesday')); // Elemento Dia
// console.log(getSchedule('')); // Elemento Dia

// module.exports = getSchedule;
