const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allTime = () => {
  const { hours } = data;
  return Object.keys(hours).reduce((acc, value) => {
    const day = hours[value];
    const result = acc;
    const officeHour = `Open from ${day.open}am until ${day.close}pm`;
    let exhibition = species.filter((animal) => animal.availability.includes(value));
    exhibition = exhibition.map((nameDay) => nameDay.name);
    if (value !== 'Monday') {
      result[value] = {
        officeHour,
        exhibition,
      };
    } else {
      result[value] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return result;
  }, {});
};

const days = (day) => {
  const filter = Object.entries(allTime());
  const dayFilter = filter.filter((daySelected) => daySelected[0] === day);
  return dayFilter.reduce((acc, curr) => {
    const [key, value] = curr;
    acc[key] = value;
    return acc;
  }, {});
};

const animais = (animal) => species.find((specie) => specie.name === animal).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  const specie = data.species.map((spe) => spe.name);
  const hours = Object.keys(data.hours);

  if (specie.includes(scheduleTarget)) {
    return animais(scheduleTarget);
  }
  if (hours.includes(scheduleTarget)) {
    return days(scheduleTarget);
  }
  return allTime();
}
getSchedule();
module.exports = getSchedule;
