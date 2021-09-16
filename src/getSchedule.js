const data = require('../data/zoo_data');

function verifyDay(schedule) {
  const animalsDay = data.species.filter((elemento) => elemento.availability.includes(schedule));
  const animalsName = animalsDay.map((elemento) => elemento.name);
  const dayHour = data.hours[schedule];
  const returnTo = {};
  returnTo[schedule] = {
    officeHour: `Open from ${dayHour.open}am until ${dayHour}pm`,
    exhibition: animalsName,
  };
  return returnTo;
}
// console.log(verifyDay('Monday'));

function verifyAnimal(schedule) {
  const ObjectAnimal = data.species.find((elemento) => elemento.name === schedule);
  return ObjectAnimal.availability;
}

const namesAnimals = data.species.map((elemento) => elemento.name);
const namesDay = Object.keys(data.hours);

function dontArguments() {
  const objReturn = {};
  namesDay.forEach((elemento) => {
    if (elemento === 'Monday') {
      objReturn[elemento] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      const animalsD = data.species
        .filter((elementScope) => elementScope.availability.includes(elemento));
      const nameAnimals = animalsD.map((elementos) => elementos.name);
      const dayHours = data.hours[elemento];
      objReturn[elemento] = {
        officeHour: `Open from ${dayHours.open}am until ${dayHours.closed}pm`,
        exhibition: nameAnimals,
      };
    }
  });
  return objReturn;
}

const ifMonday = {};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === 'Monday') {
    ifMonday[scheduleTarget] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return ifMonday;
  } if (namesAnimals.includes(scheduleTarget)) {
    return verifyAnimal(scheduleTarget);
  } if (namesDay.includes(scheduleTarget)) {
    return verifyDay(scheduleTarget);
  }
  return dontArguments;
}

module.exports = getSchedule;
