const data = require('../data/zoo_data');

function getExhibition(day) {
  // referencia Leandro Oliveira
  return data.species.filter((specie) => specie.availability.includes(day)).map(({ name }) => name);
}

function horasTotais() {
  const dias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const horaDia = {};
  dias.forEach((day) => {
    const { open } = data.hours[day];
    const { close } = data.hours[day];
    horaDia[day] = {};
    if (open === 0 || close === 0) {
      horaDia[day].officeHour = 'CLOSED';
      horaDia[day].exhibition = 'The zoo will be closed!'; // aviso do arquivo
    } else {
      horaDia[day].officeHour = `Open from ${open}am until ${close}pm`;
      horaDia[day].exhibition = getExhibition(day);
    }
  });
  return horaDia;
}

function getDay(day) {
  const agendaSemana = horasTotais();
  const agendaDia = {};
  agendaDia[day] = agendaSemana[day];
  return agendaDia;
}

function horaAnimal(animal) {
  return data.species.find((specie) => specie.name.includes(animal)).availability;
}

function getSchedule(scheduleTarget) {
  const dias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const animais = data.species.map(({ name }) => name);

  if (dias.includes(scheduleTarget)) return getDay(scheduleTarget);

  if (animais.includes(scheduleTarget)) return horaAnimal(scheduleTarget);

  return horasTotais;
}

module.exports = getSchedule;
