const data = require('../data/zoo_data');

const days = Object.keys(data.hours);

// Retorna o nome das espécies em exibição em um dia específico.
const getSpeciesByAvailability = (day) => data.species
  .filter(({ availability }) => availability.includes(day))
  .map(({ name }) => name);

// Retorna um objeto contendo o horário de exibição do dia e os animais a serem apresentados
const createDayDisplay = (hour, animals, day) => ({
  officeHour: hour,
  exhibition: typeof animals === 'function' ? animals(day) : animals,
});

// Retorna um objeto contendo a agenda dos dias solicitados.
const createDaysSchedule = (acc, day) => {
  acc[day] = acc[day] || {};
  const daySchedule = data.hours[day];
  const { open, close } = daySchedule;
  const scheduleObject = open && close
    ? createDayDisplay(`Open from ${open}am until ${close}pm`, getSpeciesByAvailability, day)
    : createDayDisplay('CLOSED', 'The zoo will be closed!');
  acc[day] = scheduleObject;
  return acc;
};

// Retorna um array de dias que uma espécie será exibida.
const getSpecieAvailability = (scheduleTarget) => data.species.find(({ name }) =>
  name === scheduleTarget).availability;

// Verifica se uma string é uma espécie na base de dados.
const checkAnimal = (scheduleTarget) => data.species.some(({ name }) => name === scheduleTarget);

// Verifica se uma string: é vazia, não é animal ou é apenas um dia da semana.
const isDay = (scheduleTarget, singleDay) => {
  const noParameter = !scheduleTarget;
  const invalidParameter = !days.includes(scheduleTarget);
  const isAnimal = checkAnimal(scheduleTarget);
  return (noParameter || invalidParameter || singleDay) && !isAnimal;
};

// Retorna a agenda dos dias solicitados.
function getDaySchedule(scheduleTarget, isSingleDay) {
  const dates = isSingleDay ? [scheduleTarget] : days;
  const schedule = dates.reduce(createDaysSchedule, {});
  return schedule;
}

// Retorna a agenda do animal selecionado.
function getAnimalSchedule(scheduleTarget) {
  const schedule = getSpecieAvailability(scheduleTarget);
  return schedule;
}

// Função principal que retorna a agenda de um dia da semana ou da disponibilidade de um animal
function getSchedule(scheduleTarget) {
  // seu código aqui
  const isSingleDay = days.includes(scheduleTarget);
  const isDaySchedule = isDay(scheduleTarget, isSingleDay);

  const schedule = isDaySchedule
    ? getDaySchedule(scheduleTarget, isSingleDay)
    : getAnimalSchedule(scheduleTarget);

  return schedule;
}

module.exports = getSchedule;
