const data = require('../data/zoo_data');

function getDias() {
  const dias = Object.keys(data.hours);
  const objeto = {};
  for (let i = 0; i < dias.length; i += 1) {
    objeto[dias[i]] = {};
  }
  return objeto;
}

function createObject() {
  const chaveDays = getDias();
  Object.keys(data.hours).forEach((D) => {
    const animais = data.species.filter(({ availability }) => availability.includes(D))
      .map(({ name }) => name);
    chaveDays[D].officeHour = `Open from ${data.hours[D].open}am until ${data.hours[D].close}pm`;
    chaveDays[D].exhibition = animais;
    if (D === 'Monday') {
      chaveDays[D] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    }
  });
  return chaveDays;
}

function isSpecie(scheduleTarget) {
  return data.species.some(({ name }) => name === scheduleTarget);
}

function isDay(scheduleTarget) {
  return Object.keys(data.hours).some((dia) => dia === scheduleTarget);
}

function getSpecificDay(scheduleTarget) {
  const objeto = createObject();
  if (isDay(scheduleTarget)) {
    const dia = {};
    dia[scheduleTarget] = objeto[scheduleTarget];
    return dia;
  }
}

function getSpecifitAnimal(scheduleTarget) {
  if (isSpecie(scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  }
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return createObject();
  }
  if (isDay(scheduleTarget)) {
    return getSpecificDay(scheduleTarget);
  }
  if (isSpecie(scheduleTarget)) {
    return getSpecifitAnimal(scheduleTarget);
  }
  return createObject();
}
console.log(getSchedule('ola'));

module.exports = getSchedule;
