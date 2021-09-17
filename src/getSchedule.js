const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function diasDisponiveis() {
  const horas = Object.entries(hours);
  const obj = {};

  horas.forEach((diaSemana) => {
    const { open, close } = diaSemana[1];
    Object.assign(obj, { [diaSemana[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: species
        .filter((specie) => specie.availability.includes(diaSemana[0]))
        .map((animal) => animal.name),
    } });
  });

  obj.Monday = { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' };
  return obj;
}

const retornarDiaSemana = (scheduleTarget) => ({
  [scheduleTarget]: diasDisponiveis()[scheduleTarget] });

const diasDisponiveisDoAnimal = (scheduleTarget) => species
  .find((specie) => specie.name === scheduleTarget).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  const verificarDias = Object.keys(hours).includes(scheduleTarget);
  if (verificarDias) return retornarDiaSemana(scheduleTarget);

  const verificarAnimais = species.map((specie) => specie.name).includes(scheduleTarget);
  if (verificarAnimais) return diasDisponiveisDoAnimal(scheduleTarget);

  return diasDisponiveis();
}

module.exports = getSchedule;
