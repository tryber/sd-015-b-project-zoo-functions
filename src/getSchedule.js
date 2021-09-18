const data = require('../data/zoo_data');

function exhibition(day, format) {
  const avaiableAnimals = data.species.reduce((avaiable, animals) => {
    const avaiableDays = animals.availability.forEach((specificDay) => {
      if (day === specificDay) {
        format.exhibition.push(animals.name);
        return avaiable;
      }
      return avaiable;
    });
    return avaiableDays;
  }, []);
  return avaiableAnimals;
}

function calender() {
  const officeHour = Object.entries(data.hours);
  const availabilities = officeHour.reduce((schedule, hour) => {
    const receiveSchedules = schedule;
    const day = hour[0];
    const period = hour[1];
    const dayOff = 'Monday';
    if (day === dayOff) {
      receiveSchedules[dayOff] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
      return receiveSchedules;
    }
    receiveSchedules[day] = { officeHour: '', exhibition: [] };
    const format = receiveSchedules[day];
    exhibition(day, format);
    format.officeHour = `Open from ${period.open}am until ${period.close}pm`;
    return receiveSchedules;
  }, {});
  return availabilities;
}

function animalsOfDay(specificDay, dayOff) {
  const officeHour = Object.entries(data.hours);
  const day = specificDay;
  let period = {};
  const avaiable = {};
  officeHour.forEach((hour) => {
    const isCorrectDay = hour[0];
    const specificHour = hour[1];
    if (isCorrectDay === day) { period = specificHour; return period; } return period;
  });
  if (day === dayOff) {
    avaiable[dayOff] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return avaiable;
  }
  avaiable[day] = { officeHour: '', exhibition: [] };
  const format = avaiable[day];
  exhibition(day, format);
  format.officeHour = `Open from ${period.open}am until ${period.close}pm`;
  return avaiable;
}

function avaiableDaysForVisits(animalName) {
  if (animalName === undefined || animalName.length === 0) return calender();
  const avaiableDays = data.species.reduce((avaiable, days) => {
    if (days.name === animalName) avaiable.push(...days.availability);
    return avaiable;
  }, []);
  return avaiableDays;
}

function verifyStringIsAnimal(animalName) {
  const whoIsMyAnimals = data.species.reduce((listOfAnimals, animal) => {
    listOfAnimals.push(animal.name);
    return listOfAnimals;
  }, []);
  const isAnimal = whoIsMyAnimals.reduce((myAnimal, animal) => {
    if (animalName === animal) { myAnimal.push(animal); }
    return myAnimal;
  }, []);
  const animal = isAnimal[0];
  return avaiableDaysForVisits(animal);
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const containDay = data.hours;
  if (Object.prototype.hasOwnProperty.call(containDay, scheduleTarget)) {
    return animalsOfDay(scheduleTarget, 'Monday');
  }
  return verifyStringIsAnimal(scheduleTarget);
}

module.exports = getSchedule;
