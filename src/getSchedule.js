const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function exhibitionAnimals(weekDays) {
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

function animalDaysList(obj, scheduleTarget) {
  return (obj.name === scheduleTarget ? obj.availability : undefined);
}

function verifyAnimalWeekDay(isAnimal, isWeekDay, scheduleTarget) {
  if ((!isAnimal) && (!isWeekDay)) {
    const schedule = createOfficeHour();
    return schedule;
  }

  if (isAnimal) {
    const schedule = species.map((obj) => animalDaysList(obj, scheduleTarget))
      .filter((arr) => arr !== undefined);
    return schedule[0];
  }

  if (isWeekDay) {
    const schedule = createOfficeHour();
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  return 'Insira uma string válida!';
}
function getSchedule(scheduleTarget) {
  const isAnimal = species.filter((obj) => obj.name === scheduleTarget).length !== 0;
  const isWeekDay = days.includes(scheduleTarget);

  // seu código aqui
  if (!scheduleTarget) {
    const schedule = createOfficeHour();
    return schedule;
  }
  const schedule = verifyAnimalWeekDay(isAnimal, isWeekDay, scheduleTarget);
  return schedule;
}
const a = getSchedule('penguins');
console.log(a);
module.exports = getSchedule;
