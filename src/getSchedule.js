const data = require('../data/zoo_data');

const getScheduleBySpecie = (specie) => {
  const schedule = data.species.find(({ name }) => specie === name);

  const { availability } = schedule;

  return availability;
};

const isSpecie = (scheduleTarget) => {
  const isSpecieFound = data.species.some(({ name }) => scheduleTarget === name);

  return isSpecieFound;
};

const isWeekDay = (scheduleTarget) => {
  const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return weekDay.includes(scheduleTarget);
};

const speciesAvailability = (currentDay) => {
  if (currentDay !== 'Monday') {
    const arrOfSpecies = [];

    data.species.forEach(({ name, availability }) => {
      if (availability.includes(currentDay)) {
        arrOfSpecies.push(name);
      }
    });

    return arrOfSpecies;
  }

  return 'The zoo will be closed!';
};

const getOfficeHour = (currentDay, openTime, closeTime) => {
  if (currentDay !== 'Monday') {
    return `Open from ${openTime}am until ${closeTime}pm`;
  }

  return 'CLOSED';
};

const generateSchedule = () => {
  const zooDataHours = Object.entries(data.hours);

  const zooSchedule = zooDataHours.reduce((acc, currentKey) => {
    const { open, close } = currentKey[1];
    acc[currentKey[0]] = {
      officeHour: getOfficeHour(currentKey[0], open, close),
      exhibition: speciesAvailability(currentKey[0]),
    };

    return acc;
  }, {});

  return zooSchedule;
};

const findScheduleByDay = (weekDay) => {
  const weekSchedule = Object.entries(generateSchedule());

  const daySchedule = weekSchedule.find((currentDaySchedule) => weekDay === currentDaySchedule[0]);

  const day = daySchedule[0];
  const zooSituation = daySchedule[1];

  const dayScheduleObj = {};

  dayScheduleObj[day] = zooSituation;

  return dayScheduleObj;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const isSpecieFound = isSpecie(scheduleTarget);
  const isDayOfTheWeek = isWeekDay(scheduleTarget);

  if (isSpecieFound) return getScheduleBySpecie(scheduleTarget);

  if (isDayOfTheWeek) return findScheduleByDay(scheduleTarget);

  return generateSchedule();
}

module.exports = getSchedule;
