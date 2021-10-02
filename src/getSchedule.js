const { species, hours } = require('../data/zoo_data');
// disponibilizar o horario dos animais para os users, que pode querer o cronograma da semana de um dia ou de um animal em especifico

const getAnimalsByWeekDay = (weekDay) => {
  const allAnimals = [];
  species.filter(({ name, availability }) => availability.forEach((day) => {
    if (day === weekDay) {
      return allAnimals.push(name);
    }
  }));
  return allAnimals;
  // console.log(allAnimals);
};

const getScheduleWeek = () => {
  const scheduleComplete = {};
  // retorna um array de arrays, onde, cada array tem duas posições, a primeira, o dia da semana em string, a segunda, um objeto com duas propriedades.
  Object.entries(hours).forEach((day) => { // day são os arrays separados, com duas posições
    const weekDay = day[0];
    const hourOpenAndClose = day[1];
    const { open, close } = hourOpenAndClose;
    if (!scheduleComplete[weekDay]) {
      scheduleComplete[weekDay] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAnimalsByWeekDay(weekDay),
      };
      if (hourOpenAndClose.open === 0 && hourOpenAndClose.close === 0) {
        scheduleComplete[weekDay] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      }
    }
  });
  console.log(scheduleComplete);
  return scheduleComplete;
};

const verifyAnimalOrDay = (element) => {
  const receiveAnimal = species.find(({ name }) => name === element);
  const weekDay = Object.keys(hours).find((day) => day === element);
  if (receiveAnimal === undefined && weekDay === undefined) {
    return getScheduleWeek();
  }
  if (weekDay === undefined) {
    return getAnimalName(element);
  }
  return getWeekDay(element);
  // console.log(weekDay);
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) return getScheduleWeek();
  return verifyAnimalOrDay(scheduleTarget);
}
getSchedule();
module.exports = getSchedule;
