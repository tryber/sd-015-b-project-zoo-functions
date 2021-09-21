const data = require('../data/zoo_data');

const hora1 = 'Open from 8am until 6pm';

const horarios = {
  Tuesday: {
    officeHour: hora1,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: hora1,
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
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function diasEhoras(dia) {
  const Tuesday = { Tuesday: {
    officeHour: hora1,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  } };
  const Wednesday = { Wednesday: { officeHour: hora1,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  } };
  const result = [];
  switch (dia) {
  case 'Monday': result.push({
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  });
    break;
  default: break;
  case 'Tuesday': result.push(Tuesday); break;
  case 'Wednesday': result.push(Wednesday); break;
  }
  return result[0];
}

function getSchedule(scheduleTarget) {
  let result = [];
  if (scheduleTarget === undefined || scheduleTarget === 'qualquercoisa') {
    return horarios;
  }
  data.species.forEach((animal) => {
    if (scheduleTarget === animal.name) {
      result = animal.availability;
    }
  });
  if (result.length === 0) {
    return diasEhoras(scheduleTarget);
  }
  return result;
}

module.exports = getSchedule;
