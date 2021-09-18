const data = require('../data/zoo_data');

const openingHours = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'elephants',
      'giraffes',
    ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'snakes',
      'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const dayMondey = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return openingHours;
  } if (scheduleTarget === 'Monday') {
    return dayMondey;
  }
}

module.exports = getSchedule;
// console.log(getSchedule('Monday'));
