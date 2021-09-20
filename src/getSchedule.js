const data = require('../data/zoo_data');

const dias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const resultado = {};

function hoursAvaible() {
  dias.forEach((dia) => {
    const { open } = data.hours[dia];
    const { close } = data.hours[dia];
    resultado[dia] = {};
    if (open === 0 || close === 0) {
      resultado[dia].officeHour = 'CLOSED';
    } else {
      resultado[dia].officeHour = `Open from ${open}am until ${close}pm`;
    } 
  });
  return resultado;
}
function getExhibition() {
  dias.forEach((dia) => {
    let animaisAtuais = data.species.filter((animal) => animal.availability.includes(dia));
    animaisAtuais = animaisAtuais.map((animal) => animal.name);
    if (animaisAtuais.length === 0) {
      resultado[dia].exhibition = 'the zoo will be closed!';
    } else {
      resultado[dia].exhibition = animaisAtuais;
    }
  });
}

function programação(conograma) {
  if (!conograma) {
    return false;
  }
  const animals = data.species.map((animal) => animal.name);
  const animaisExibiçao = data.species.find((animal) => animal.name === conograma)
  if (animals.includes(programação)) {
    return animaisExibiçao.availability;
  }
}

function getSchedule(scheduleTarget) {
  hoursAvaible();
  getExhibition();
  if (scheduleTarget === 'Monday') {
    return { Monday : resultado[scheduleTarget] };
  }
  if (dias.includes(scheduleTarget)) {
    return { [scheduleTarget]: resultado[scheduleTarget] };
  }
  if (programação(scheduleTarget)) {
    return programação(scheduleTarget);
  }
  return resultado;
}



module.exports = getSchedule;
