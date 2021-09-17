const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const daysAndTime = Object.entries(hours);
const AnimalsOnShow = (weekDay) => species.filter(({ availability }) => availability
  .includes(weekDay)).map(({ name }) => name);

const schedule = (daysTime) => daysTime.reduce((accumulator, current) => {
  const scheduleOfDay = `Open from ${current[1].open}am until ${current[1].close}pm`;
  const conditionDay = (current[0] === 'Monday')
    ? accumulator[current[0]] = 'CLOSED' : scheduleOfDay;
  const conditionView = (current[0] === 'Monday')
    ? accumulator[current[0]] = 'The zoo will be closed!' : AnimalsOnShow(current[0]);

  accumulator[current[0]] = { exhibition: conditionView, officeHour: conditionDay };
  return accumulator;
}, {});

const checkAnimal = (value) => species.some(({ name }) => name === value);
const checkdDay = (dateValue) => daysAndTime.some((day) => day[0] === dateValue);
const checkUdefined = (value) => value === undefined;

const checkValue = (scheduleValue) => {
  const checkAnimalAndDay = checkAnimal(scheduleValue) || checkdDay(scheduleValue);
  return checkUdefined(scheduleValue) || !checkAnimalAndDay;
};

const getAnimalNames = (scheduleTarget) => {
  const findAnimalByName = species.some((animal) => animal.name === scheduleTarget);
  if (findAnimalByName) {
    return species.filter((animal) => animal.name
    === scheduleTarget).shift().availability;
  }
  return false;
};

const filterResult = (scheduleTarget) => daysAndTime
  .filter((day) => day[0] === scheduleTarget);

function getSchedule(scheduleTarget) {
  if (checkValue(scheduleTarget)) return schedule(daysAndTime);
  if (getAnimalNames(scheduleTarget)) return getAnimalNames(scheduleTarget);
  return schedule(filterResult(scheduleTarget));
}

module.exports = getSchedule;
