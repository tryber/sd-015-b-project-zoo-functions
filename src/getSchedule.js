const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const dias = Object.keys(hours);
function funcaoPai() {
  const resultado = dias.reduce((acc, elem) => {
    const filtroAnimais = species.filter((elemento) => elemento.availability.includes(elem));
    let office = `Open from ${hours[elem].open}am until ${hours[elem].close}pm`;
    let exhibi = filtroAnimais.map((elemento) => elemento.name);
    if (elem === 'Monday') {
      office = 'CLOSED';
      exhibi = 'The zoo will be closed!';
    }
    acc[elem] = {
      officeHour: office,
      exhibition: exhibi,
    };
    return acc;
  }, {});
  return resultado;
}

function verificaAnimal(param) {
  const test = species.some((elemento) => elemento.name === param);
  return test;
}

function verificaDia(param) {
  const resultado = dias.some((elemento) => elemento === param);
  return resultado;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return funcaoPai();
  }
  if (!verificaAnimal(scheduleTarget) && !verificaDia(scheduleTarget)) {
    return funcaoPai();
  }
  if (verificaDia(scheduleTarget)) {
    const resultado = {
    };
    resultado[scheduleTarget] = funcaoPai()[scheduleTarget];
    return resultado;
  }
  const animal = species.find((elemento) => elemento.name === scheduleTarget);
  return animal.availability;
}

module.exports = getSchedule;
