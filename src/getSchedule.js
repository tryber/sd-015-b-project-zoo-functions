const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const scheduleMonday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
const showAllInformation = {};
let showInformationByDay = {};
const daysOfWeek = Object.keys(hours);

function functionAllInformation(allInformation) {
  const getAllanimalsByDay = species.filter((day) =>
    day.availability.includes(allInformation));
  showAllInformation[allInformation] = {
    officeHour: `Open from ${hours[allInformation]
      .open}am until ${hours[allInformation].close}pm`,
    exhibition: getAllanimalsByDay.map((nameOfAnimals) => nameOfAnimals.name),
  };
  if (allInformation === 'Monday') {
    showAllInformation.Monday = scheduleMonday;
  }
}
function getSpecificDay(scheduleTarget) {
  const getAnimalsByDay = species.filter((day) =>
    day.availability.includes(scheduleTarget.toString()));
  showInformationByDay = {};
  showInformationByDay[scheduleTarget] = {
    officeHour: `Open from ${hours[scheduleTarget]
      .open}am until ${hours[scheduleTarget].close}pm`,
    exhibition: getAnimalsByDay.map((nameOfAnimals) => nameOfAnimals.name),
  };
}

function getSchedule(scheduleTarget) {
  const verifyAnimal = species.some((animal) => animal.name.includes(scheduleTarget));
  const verifyDayOfWeek = daysOfWeek.some((days) => days.includes(scheduleTarget));
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (verifyAnimal === true) {
    return species.find((dayAnimals) =>
      dayAnimals.name === scheduleTarget).availability;
  }
  if (verifyDayOfWeek === true && scheduleTarget !== 'Monday') {
    getSpecificDay(scheduleTarget);
    return showInformationByDay;
  }
  daysOfWeek.forEach(functionAllInformation);
  return showAllInformation;
}

module.exports = getSchedule;
