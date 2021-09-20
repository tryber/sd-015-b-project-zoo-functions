const data = require('../data/zoo_data');

const monday = {
  Monday:
   {
     exhibition: 'The zoo will be closed!',
     officeHour: 'CLOSED',
   },
};
function getSchedule(scheduleTarget) {
  const dias = scheduleTarget;

  if (scheduleTarget === 'Monday') {
    return monday;
  }
  return { [scheduleTarget]: {
    officeHour: `Open from ${data.hours[dias].open}am until ${data.hours[dias].close}pm`,
    exhibition: data.species.filter((element) => element.availability.includes(scheduleTarget))
      .map((elemento) => elemento.name),
  } };
}

module.exports = getSchedule;
