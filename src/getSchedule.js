const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objVisit = {};
Object.entries(hours).forEach(([key, value]) => {
  objVisit[key] = { officeHour: '', exhibition: '' };
  if (key === 'Monday') {
    objVisit[key].officeHour = 'CLOSED';
    objVisit[key].exhibition = 'The zoo will be closed!';
  } else {
    objVisit[key].officeHour = `Open from ${value.open}am until ${value.close}pm`;
    objVisit[key].exhibition = species.filter(({ availability }) => availability
      .some((day) => day === key)).map(({ name }) => name);
  }
});
function getSchedule(scheduleTarget) {
  const argument1 = Object.keys(objVisit).some((value) => value === scheduleTarget);
  const argument2 = species.some((animal) => animal.name === scheduleTarget);
  if (argument1) {
    const day = {};
    Object.entries(objVisit)
      .filter(([key]) => key === scheduleTarget).forEach(([key, value]) => {
        day[key] = value;
      });
    return day;
  } if (argument2) {
    return species.find((specie) => specie.name === scheduleTarget)
      .availability;
  }
  return objVisit;
}

module.exports = getSchedule;
