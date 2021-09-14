const data = require('../data/zoo_data');

const { species, hours } = data;

const totalSchedule = () => {
  const total = {};
  Object.keys(hours).forEach((element) => {
    const timeTotal = hours[element];
    if (element === 'Monday') {
      total[element] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      total[element] = {
        officeHour: `Open from ${timeTotal.open}am until ${timeTotal.close}pm`,
        exhibition: species
          .filter((animal) => animal.availability.includes(element))
          .map((elem) => elem.name),
      };
    }
  });
  return total;
};

const animalOrDay = (scheduleTarget, day, animals) => {
  if (animals) return species.find((animal) => animal.name === scheduleTarget).availability;
  if (day) return { [scheduleTarget]: totalSchedule()[scheduleTarget] };
};

const getSchedule = (scheduleTarget) => {
  const day = Object.keys(hours).includes(scheduleTarget);
  const animal = species.some((element) => element.name === scheduleTarget);
  if (animal || day) {
    return animalOrDay(scheduleTarget, day, animal);
  }
  return totalSchedule();
};

module.exports = getSchedule;
