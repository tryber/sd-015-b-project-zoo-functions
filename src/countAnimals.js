const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, value) =>
    // acessado : https://github.com/tryber/sd-014-b-project-zoo-functions/blob/Jo%C3%A3oHenrique-Zoo-Functions/src/zoo.js
      ({ ...acc, [value.name]: value.residents.length }), {});
    // ...
  } if (animal.sex === undefined) {
    return species.find((animals) => animals.name === animal.specie).residents.length;
  //  Primeiro criamos o critério que só pode entrar quem tiver a chave animal.gender indefinodo
  //  e depois procuramos animals.name iguais a animal.specie e contamos quantos residentes existem
  //  residents.length
  }
  return species.find((animals) => animals.name === animal.specie).residents
    .filter((number) => number.sex === animal.sex).length;
  //  O início é exatamente igual ao anterior, só adicionamos o filter para
  // nos dar apenas os animais do genero que se passa por parametro e assim contabilizar.
}
module.exports = countAnimals;
