const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function getSchedule(dayName) {
  // Acessa os keys e os values do objeto 'hours' e armazena em constantes.
  const days = Object.keys(hours);
  const dayHours = Object.values(hours);
  const schedule = days.reduce((acc, crr, index) => {
    // Se o valor de dayHours no objeto for estritamente igual a 0 irá retornar a mensagem 'CLOSED'.
    if (dayHours[index].open === 0) {
      acc[crr] = 'CLOSED';
      return acc;
    }
    // Ao passar um dayName que não tenha o valor de 0 irá retornar o resultado de reduce do dia escolhido printando os horarios de abertura e fechamento do Zoo.
    (acc[crr] = (`Open from ${dayHours[index].open}am until ${dayHours[index].close}pm`));
    return acc;
  }, {});
  if (!dayName) {
    return schedule;
  } // Se o parâmetro passado não corresponder a nenhum dos keys dentro do objeto hours, ele retorna os horários de abertura e fechamento de TODOS os dias da semana usando o template de 'schedule'.
  return { [dayName]: schedule[dayName] };
}

module.exports = getSchedule;
