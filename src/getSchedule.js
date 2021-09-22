const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const week = Object.entries(hours);

const getWekend = () => {
  const result = week.reduce((acumulator, currentValue, index) => {
    const horario = `Open from ${week[index][1].open}am until ${week[index][1].close}pm`;
    const exhibitionAnimals = species.reduce((acumulador, { name, availability }) => {
      if (availability.includes(week[index][0])) {
        acumulador.push(name);
      }
      return acumulador;
    }, []);

    acumulator[currentValue[0]] = { officeHour: horario, exhibition: exhibitionAnimals };
    if (week[index][0] === 'Monday') {
      acumulator[currentValue[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return acumulator;
  }, {});
  return result;
};

const getDayWeek = (day) => {
  const days = week.reduce((acumulador, [dayWeek]) => {
    acumulador.push(dayWeek);
    return acumulador;
  }, []);
  if (day !== undefined && days.includes(day)) {
    return { [day]: getWekend()[day] };
  }
  return getWekend();
};

const getScheduleAnimal = (animal) => {
  const result = species.find(({ name }) => name === animal);
  return result.availability;
};

function getSchedule(scheduleTarget) {
  const animals = species.reduce((acumulador, { name }) => {
    acumulador.push(name);
    return acumulador;
  }, []);

  if (animals.includes(scheduleTarget)) {
    return getScheduleAnimal(scheduleTarget);
  }
  return getDayWeek(scheduleTarget);
}

module.exports = getSchedule;
