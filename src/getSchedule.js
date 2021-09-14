const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getExhibition(day) {
  const inExhibitionOn = [];
  species.forEach(({ availability, name } = species) => {
    if (availability.some((available) => available === day)) {
      inExhibitionOn.push(name);
    }
  });
  // retorna uma lista com os animais em exibição no dia 'day'
  return inExhibitionOn;
}

function weeklySchedule() {
  const schedule = {};
  const keys = Object.keys(hours);
  const entries = Object.values(hours);
  for (let i = 0; i < keys.length; i += 1) {
    let officeHour;
    let exhibition;
    if (!entries[i].open) {
      officeHour = 'CLOSED';
      exhibition = 'The zoo will be closed!';
    } else {
      officeHour = `Open from ${entries[i].open}am until ${entries[i].close}pm`;
      exhibition = getExhibition(keys[i]);
    }
    schedule[keys[i]] = { officeHour, exhibition };
  }
  return schedule;
}
function dailySchedule(day) {
  const daily = {};
  const hourKeys = Object.keys(hours);
  const hourValues = Object.values(hours);
  let officeHour;
  // identifica o dia da semana
  for (let i = 0; i < hourKeys.length; i += 1) {
    if (hourKeys[i] === day) {
      officeHour = `Open from ${hourValues[i].open}am until ${hourValues[i].close}pm`;
      const exhibition = getExhibition(day);
      daily[day] = { officeHour, exhibition };
    }
  }
  if (Object.keys(daily).length === 0) {
    return weeklySchedule();
  }
  return daily;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  let schedule;
  schedule = dailySchedule(scheduleTarget);
  // testa se o parametro passado é 'Monday'
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }

  // Testa se o parâmetro passado é um animal
  species.forEach(({ name, availability } = species) => {
    if (name === scheduleTarget) {
      schedule = availability;
    }
  });
  // se não for nem segunda e nem um animal é uma string geral ou um dia da semana
  return schedule;
}
// console.log(getSchedule('Saturday'));
module.exports = getSchedule;
