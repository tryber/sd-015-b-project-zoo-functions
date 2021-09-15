const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const AnimalsName = species.map((animal) => animal.name);

const verifyDays = (days) => weekDays.find((day) => day === days);
const verifyAnimals = (animals) => AnimalsName.find((animal) => animal === animals);

const dayAnimals = (day) => {
  const arrAnimals = species.filter((animal) => animal.availability.includes(day));
  const arrAnimalsNames = arrAnimals.map((animal) => animal.name);
  return arrAnimalsNames;
};

const defaultResponse = () => {
  const defaultResponses = {};
  weekDays.forEach((day) => {
    if (day !== 'Monday') {
      defaultResponses[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: dayAnimals(day),
      };
    } else {
      defaultResponses[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return defaultResponses;
};

const hourDays = (days) => {
  const result = {};
  if (days === 'Monday') {
    result[days] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    result[days] = {
      officeHour: `Open from ${hours[days].open}am until ${hours[days].close}pm`,
      exhibition: dayAnimals(days),
    };
  }
  return result;
};

const animalsDays = (animal) => {
  const searchedAnimal = species.filter((specie) => specie.name === animal);
  return searchedAnimal[0].availability;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  let result = 0;
  if (!scheduleTarget || !verifyDays(scheduleTarget)) {
    result = defaultResponse();
  }
  if (verifyDays(scheduleTarget)) {
    result = hourDays(scheduleTarget);
  }
  if (verifyAnimals(scheduleTarget)) {
    result = animalsDays(scheduleTarget);
  }
  return result;
}

// console.log(getSchedule('Monday'));
module.exports = getSchedule;
