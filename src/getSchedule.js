const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

// **O que será avaliado**

// - Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
// - Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
// - Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
// - Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.

const getAnimalAvailability = (target) => species
  .find((animal) => animal.name === target).availability;

const recoverSchedule = () => {
  const objEntries = Object.entries(hours);
  const returnObject = {};
  objEntries.forEach((day) => {
    const { open, close } = day[1];
    Object.assign(returnObject, { [day[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: species
        .filter(({ availability }) => availability.includes(day[0]))
        .map(({ name }) => name),
    },
    });
  });
  returnObject.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return returnObject;
};

const getDaySchedule = (targetedDay) => ({ [targetedDay]: recoverSchedule()[targetedDay] });

function getSchedule(dayName) {
  if (Object.keys(hours).includes(dayName)) {
    return getDaySchedule(dayName);
  }
  if (species.map(({ name }) => name).includes(dayName)) {
    return getAnimalAvailability(dayName);
  }
  return recoverSchedule();
}

module.exports = getSchedule;
