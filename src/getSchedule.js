const data = require('../data/zoo_data');

function ifDay(scheduleTarget) {
  const dayAnimals = data.species
    .filter((element) => element.availability.includes(scheduleTarget));
  const animalsName = dayAnimals.map((element) => element.name);
  const arrayHoursDay = data.hours[scheduleTarget];
  const objReturn = {};
  objReturn[scheduleTarget] = {
    officeHour: `Open from ${arrayHoursDay.open}am until ${arrayHoursDay.close}pm`,
    exhibition: animalsName,
  };

  return objReturn;
}

function ifAnimal(scheduleTarget) {
  const animalObj = data.species.find((element) => element.name === scheduleTarget);
  return animalObj.availability;
}

const animalNames = data.species.map((element) => element.name);
const dayNames = Object.keys(data.hours);
function ifNoArgs() {
  const returnObj = {};
  dayNames.forEach((element) => {
    if (element === 'Monday') {
      returnObj[element] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      const dayAnimals = data.species
        .filter((scopeElement) => scopeElement.availability.includes(element));
      const animalsName = dayAnimals.map((elements) => elements.name);
      const arrayHoursDay = data.hours[element];
      returnObj[element] = {
        officeHour: `Open from ${arrayHoursDay.open}am until ${arrayHoursDay.close}pm`,
        exhibition: animalsName,
      };
    }
  });
  return returnObj;
}

const ifMonday = {};
function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    ifMonday[scheduleTarget] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return ifMonday;
  } if (animalNames.includes(scheduleTarget)) {
    return ifAnimal(scheduleTarget);
  } if (dayNames.includes(scheduleTarget)) {
    return ifDay(scheduleTarget);
  }
  return ifNoArgs();
}

module.exports = getSchedule;
