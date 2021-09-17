const data = require('../data/zoo_data');

// function paramIsAnAnimal(scheduleTarget) {
//   const parameterIsAnAnimal = data.species.some((specie) => specie.name === scheduleTarget);
//   const animalAvalable = data.species.find((specie) => specie.name === scheduleTarget).availability;
//   if (parameterIsAnAnimal) return animalAvalable;
// }

// const zooSchedule = () => {
//   const daysHours = {};
//   data.hours.forEach((day) => {
//     Object.assign(daysHours, { [day[0]]: {
//       officeHour: `Open from ${day[1].open} until ${day[2].open}`,
//       exhibition: data.species.filter((specie) => specie.availability.includes(day[1]))
//         .map(({ name }) => name),
//     },
//     });
//     return daysHours;
//   });

//   daysHours.Monday = {
//     officeHour: 'CLOSED',
//     exhibition: 'The zoo will be closed!',
//   };
//   return daysHours;
// };

// const returnDays = (scheduleTarget) => ({ [scheduleTarget]: zooSchedule()[scheduleTarget] });

function getSchedule(scheduleTarget) {
  // if (Object.keys(data.hours).includes(scheduleTarget)) return returnDays(scheduleTarget);

  // if (paramIsAnAnimal(scheduleTarget)) return paramIsAnAnimal(scheduleTarget);

  // return zooSchedule();
}
getSchedule('Tuesday');

module.exports = getSchedule;
