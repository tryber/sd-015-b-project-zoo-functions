const data = require('../data/zoo_data');

const { hours } = data;

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

const { species } = data;

const getAnimals = (weekDay) => {
  const animals = [];
  species.forEach((element) => {
    if (element.availability.includes(weekDay)) {
      animals.push(element.name);
    }
  });
  return animals;
};

const getDays = (animal) => {
  const days = species.find((element) => element.name === animal);
  if (days === undefined) {
    return undefined;
  } return days.availability;
};

const completeSchedule = {
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: getAnimals('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: getAnimals('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: getAnimals('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: getAnimals('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: getAnimals('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: getAnimals('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const week = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];

function getSchedule(scheduleTarget) {
  const check = week.includes(scheduleTarget);
  const scheduleByAnimal = getDays(scheduleTarget);
  if (check) {
    const scheduleByDate = {
      [scheduleTarget]: completeSchedule[scheduleTarget],
    };
    return scheduleByDate;
  } if (scheduleByAnimal !== undefined) {
    return scheduleByAnimal;
  } return completeSchedule;
}

module.exports = getSchedule;
