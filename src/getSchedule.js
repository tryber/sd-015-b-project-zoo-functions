const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const completeSchedule = () => {
  const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = hours;
  const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const daysOfWeekVar = [Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday];
  const completedSchedule = {};

  daysOfWeek.forEach((day, index) => {
    const getAnimalsByDays = species.filter((item) => item.availability.includes(day));
    const getTheNames = getAnimalsByDays.map((anName) => anName.name);
    completedSchedule[day] = {
      officeHour: `Open from ${daysOfWeekVar[index].open}am until ${daysOfWeekVar[index].close}pm`,
      exhibition: getTheNames,
    };
    if (completedSchedule[day].exhibition.length === 0) {
      completedSchedule[day].exhibition = 'The zoo will be closed!';
      completedSchedule[day].officeHour = 'CLOSED';
    }
  });
  return completedSchedule;
};

const animalSelected = (animal) => species.find((anDay) => anDay.name === animal).availability;

const daySelected = (day) => {
  const getDay = {};
  getDay[day] = completeSchedule()[day];

  return getDay;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const getTypeOfAnimals = species.map((animals) => animals.name);
  const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

  if (getTypeOfAnimals.includes(scheduleTarget)) {
    return animalSelected(scheduleTarget);
  }

  if (daysOfWeek.includes(scheduleTarget)) {
    return daySelected(scheduleTarget);
  }

  return completeSchedule();
}

console.log(getSchedule('Saturday'));

module.exports = getSchedule;
