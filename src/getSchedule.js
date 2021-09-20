const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

// criando lista de animais e de dias
const diasDaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const nomeDosAnimais = species.map((animal) => animal.name);

// verificando um dia e um animal dentro da lista
const verificarDias = (dias) => diasDaSemana.find((dia) => dia === dias);
const vetificarAnimais = (animais) => nomeDosAnimais.find((animal) => animal === animais);

// função mapear se em um dia ta animal esta incluido
const diaDosAnimais = (dia) => {
  const animais = species.filter((animal) => animal.availability.includes(dia));
  const nomesAnimais = animais.map((nomeAnimal) => nomeAnimal.name);
  console.log(nomesAnimais);
  return nomesAnimais;
};

// criar resposta sem parametro
const semParametro = () => {
  const resposta = {};
  diasDaSemana.forEach((dia) => {
    if (dia === 'Monday') {
      resposta[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    if (dia !== 'Monday') {
      resposta[dia] = {
        officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
        exhibition: diaDosAnimais(dia),
      };
    }
  });
  return resposta;
};

// resposta com parametro

const comParametro = (dia) => {
  const respostaParametro = {};
  if (dia === 'Monday') {
    respostaParametro[dia] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  if (dia !== 'Monday') {
    respostaParametro[dia] = {
      officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
      exhibition: diaDosAnimais(dia),
    };
  }
  return respostaParametro;
};

const aviabilidadeAnimais = (animal) => {
  const animalProcurado = species.filter((especie) => especie.name === animal);
  return animalProcurado[0].availability;
};

function getSchedule(scheduleTarget) {
  if (diasDaSemana.includes(scheduleTarget)) {
    return comParametro(scheduleTarget);
  }
  if (nomeDosAnimais.includes(scheduleTarget)) {
    return aviabilidadeAnimais(scheduleTarget);
  }
  return semParametro();
}

module.exports = getSchedule;
