const data = require('../data/zoo_data');

const { species, hours } = data;
const days = Object.keys(hours);
const allAnimals = species.map((specie) => specie.name);
const daysAndAnimals = days.concat(allAnimals);

function scheduleGenerator(day) {
  let officeHour;
  let exhibition;

  if (day === 'Monday') {
    officeHour = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  } else {
    const animals = species.filter((specie) => specie.availability.includes(day));
    officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    exhibition = animals.map((animal) => animal.name);
  }

  return {
    officeHour,
    exhibition,
  };
}

function crateFullSchedule() {
  const schedule = {};

  days.forEach((day) => { schedule[day] = scheduleGenerator(day); });

  return schedule;
}

function createScheduleOfDay(scheduleTarget) {
  const schedule = {};

  schedule[scheduleTarget] = scheduleGenerator(scheduleTarget);

  return schedule;
}

function createScheduleOfAnimal(scheduleTarget) {
  const getDaysOfAnimal = species.find((specie) => specie.name === scheduleTarget);

  return getDaysOfAnimal.availability;
}

function getSchedule(scheduleTarget) {
  const checkedDaysAndAnimals = daysAndAnimals.includes(scheduleTarget);

  if (!scheduleTarget || !checkedDaysAndAnimals) {
    return crateFullSchedule();
  }

  if (days.includes(scheduleTarget)) {
    return createScheduleOfDay(scheduleTarget);
  }

  if (allAnimals.includes(scheduleTarget)) {
    return createScheduleOfAnimal(scheduleTarget);
  }
}

module.exports = getSchedule;
