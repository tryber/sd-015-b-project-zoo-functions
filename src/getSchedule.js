const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function exhibitionAnimals(weekDays) {
  // return species.map((obj) => {
  //   if (obj.availability.includes(weekDays)) {
  //     return obj.name;
  //   }
  // });
  return species.map((obj) => (obj.availability.includes(weekDays) ? obj.name : undefined));
}
function createOfficeHour() {
  const weekDays = Object.keys(data.hours);
  return weekDays.reduce((acc, weekDay) => {
    const { open } = data.hours[weekDay];
    const { close } = data.hours[weekDay];
    if (weekDay === 'Monday') {
      acc[weekDay] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      acc[weekDay] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        // species.map((obj) => obj.name), - retorna nome de todos os animais
        exhibition: exhibitionAnimals(weekDay).filter((animal) => animal !== undefined),
      };
    }
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) {
    const schedule = createOfficeHour();
    return schedule;
  }
}
const a = getSchedule();
console.log(a);
module.exports = getSchedule;
