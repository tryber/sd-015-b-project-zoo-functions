// Requisito feito com ajuda dos colegas: Danielen Cestari, Leandro Oliveira e Ulisses Roque.

const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function exhibition(day) {
  // filtra e organiza de acordo com o nome - referência do Leandro Oliveira
  return data.species.filter((specie) => specie.availability.includes(day)).map(({ name }) => name);
}

function scheduleTime() {
  const schedule = {};
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  days.forEach((day) => {
    schedule[day] = {};
    schedule[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    schedule[day].exhibition = exhibition(day);
    if (day === 'Monday') {
      schedule[day].officeHour = 'CLOSED';
      schedule[day].exhibition = 'The zoo will be closed!';
    }
  });
  return schedule;
}

function dailySchedule(day) {
  // feita com MUITA ajuda da Danielen e do Leandro
  const weekSchedule = scheduleTime();
  const todayDailySchedule = {};
  todayDailySchedule[day] = weekSchedule[day];
  // retorna agenda do dia
  return todayDailySchedule;
}

function animalSchedule(animal) {
  const specie = data.species.find((elementAnimal) => elementAnimal.name === animal);
  const dayList = specie.availability;
  return dayList;
}

function getSchedule(scheduleTarget) {
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const bichos = data.species.map(({ name }) => name);

  // pesquisa por dia
  if (days.includes(scheduleTarget)) return dailySchedule(scheduleTarget);

  // pesquisa por animal
  if (bichos.includes(scheduleTarget)) return animalSchedule(scheduleTarget);

  // pesquisa sem parâmetro; retorna todos dias/horários
  return scheduleTime();
}

module.exports = getSchedule;
