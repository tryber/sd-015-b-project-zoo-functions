const data = require('../data/zoo_data');

function retornarNomeCompleto(informacao) {
  const filtrarFuncionario = data.employees.find((nome) => nome.id === informacao
    .id || nome.firstName === informacao.name || nome.lastName === informacao.name);
  const nomeCompleto = `${filtrarFuncionario.firstName} ${filtrarFuncionario.lastName}`;
  return nomeCompleto;
}

function retornarId(informacao) {
  const filtrarFuncionario = data.employees.find((nome) => nome.id === informacao
    .id || nome.firstName === informacao.name || nome.lastName === informacao.name);
  const idFuncionario = `${filtrarFuncionario.id}`;
  return idFuncionario;
}

function retornarEspecies(informacao) {
  const filtrarFuncionario = data.employees.find((nome) => nome.id === informacao
    .id || nome.firstName === informacao.name || nome.lastName === informacao.name);
  const especies = filtrarFuncionario.responsibleFor;
  const filtarAnimal = data.species.filter((animal) => especies.some((id) => animal.id === id));
  const nomeAnimal = filtarAnimal.map((elemento) => elemento.name);
  return nomeAnimal;
}

function retornarLocalizacao(informacao) {
  const filtrarFuncionario = data.employees.find((nome) => nome.id === informacao
    .id || nome.firstName === informacao.name || nome.lastName === informacao.name);
  const especies = filtrarFuncionario.responsibleFor;
  const filtarAnimal = data.species.filter((animal) => especies.some((id) => animal.id === id));
  const localizacaoAnimal = filtarAnimal.map((elemento) => elemento.location);
  return localizacaoAnimal;
}

function criarObjetoDaPessoa(informacao) {
  const informacaoDaPessoa = {
    id: retornarId(informacao),
    fullName: retornarNomeCompleto(informacao),
    species: retornarEspecies(informacao),
    locations: retornarLocalizacao(informacao),
  };
  return informacaoDaPessoa;
}

function validarErro(informacao) {
  const verificarId = data.employees.some((nome) => nome.id === informacao
    .id || nome.firstName === informacao.name || nome.lastName === informacao.name);
  return verificarId;
}

function listaComTodasPessoas() {
  const informacaoDoFuncionario = data.employees.map((nome) => criarObjetoDaPessoa(nome));
  return informacaoDoFuncionario;
}
listaComTodasPessoas();
function getEmployeesCoverage(informacao) {
  // seu código aqui
  if (informacao === undefined) {
    return listaComTodasPessoas();
  }
  if (validarErro(informacao) === false) {
    throw new Error('Informações inválidas');
  }
  if (validarErro(informacao) === true) {
    return criarObjetoDaPessoa(informacao);
  }
}

module.exports = getEmployeesCoverage;
