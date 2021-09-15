const data = require('../data/zoo_data');

const { species, hours } = data;

const infoHours = Object.entries(hours);

// for (let day in hours) {
//   console.log(`${day} = ${hours[day]}`)
// }

function withoutParameters() {
  const object = {};
  infoHours.forEach((day) => {
    const { open, close } = day[1];
    Object.assign(object, { [day[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: (species.filter(({ availability }) => availability.includes(day[0]))
        .map(({ name }) => name)),
    } });
  });
  object.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return object;
}

function getSchedule(scheduleTarget, animal, day) {
  if (!scheduleTarget) return withoutParameters();
  if (!animal && !day) return withoutParameters();
}

module.exports = getSchedule;
