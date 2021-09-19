// Requisito feito com ajuda dos colegas: Danielen Cestari, Leandro Oliveira e Ulisses Roque.

const data = require('../data/zoo_data');

function exhibition(day) {
  // filtra e organiza de acordo com o nome - referência do Leandro Oliveira
  return data.species.filter((specie) => specie.availability.includes(day)).map(({ name }) => name);
}

function scheduleTime() {
  const schedule = {};
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  days.forEach((day) => {
    schedule[day] = {};
    schedule[day].officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
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

function getSchedule(scheduleTarget) { // aqui filtra os resultados, por isso usa as funções de cima aqui.
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const bichos = data.species.map(({ name }) => name);
  if (days.includes(scheduleTarget)) return dailySchedule(scheduleTarget); // qdo pesquisa por dia
  if (bichos.includes(scheduleTarget)) return animalSchedule(scheduleTarget); // qdo pesquisa por bicho
  return scheduleTime(); // qdo a pesquisa é vazia e tem que retornar TUDÃO
}

module.exports = getSchedule;
