const data = require('../data/zoo_data');

const daysOfWeek = Object.keys(data.hours);
const animalsArray = data.species.map((animals) => animals.name);

const exhibitionFunc = () => {
  const animalsAvailable = [[], [], [], [], [], []];
  const exhibitionArray = data.species.map((availabilityDay) => availabilityDay.availability);

  const exhibitionCond = (i, j) => {
    if ((exhibitionArray[j].join('')).includes(daysOfWeek[i])) {
      animalsAvailable[i].push(animalsArray[j]);
    }
  };

  for (let i = 0; i < daysOfWeek.length; i += 1) {
    for (let j = 0; j < exhibitionArray.length; j += 1) {
      exhibitionCond(i, j);
    }
  }

  return animalsAvailable;
};

const officeHourFunc = () => {
  const officeHourArray = Object.values(data.hours).map((hours) =>
    `Open from ${hours.open}am until ${hours.close}pm`);
  return officeHourArray;
};

const scheduleOfWeek = () => {
  const result = {};
  for (let i = 0; i < daysOfWeek.length; i += 1) {
    result[daysOfWeek[i]] = {};
    result[daysOfWeek[i]].officeHour = officeHourFunc()[i];
    result[daysOfWeek[i]].exhibition = exhibitionFunc()[i];
  }
  result.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return result;
};

const searchForAnimalDisplayDays = (animalSchedule) => {
  const findAnimal = data.species.find((animal) => animalSchedule === animal.name);
  return findAnimal.availability;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return scheduleOfWeek();
  if (daysOfWeek.join(' ').includes(scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = scheduleOfWeek()[scheduleTarget];
    return result;
  }
  if (animalsArray.join(' ').includes(scheduleTarget)) {
    return searchForAnimalDisplayDays(scheduleTarget);
  }
  return scheduleOfWeek();
}

module.exports = getSchedule;
