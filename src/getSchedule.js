const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
// Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
// Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.


function getSchedule(scheduleTarget) {
  if (!scheduleTarget || scheduleTarget != species.name || scheduleTarget != hours)
  return hours.map((all) => all.species.availabi && all.hours)
}

module.exports = getSchedule;
