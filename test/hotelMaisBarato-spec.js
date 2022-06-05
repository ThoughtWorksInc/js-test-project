'use strict'

const { assert } = require('chai')
const chai = require('chai')
const expect = chai.expect
const { isFimDeSemana, isFidelidade, hotelMaisBarato } = require("../hotelMaisBarato")
const { hoteis } = require("../hoteis");





describe('isFimDeSemana()', function () {

  it('Deve retornar true caso a data inserida seja um fim de semana', function () {
    expect(isFimDeSemana("28Mar2020(sat)")).to.equal(true);
  })

  it('Deve retornar false caso a data inserida seja um dia de semana', function () {
    expect(isFimDeSemana("27Mar2020(fri)")).to.equal(false);
  })
})

describe('isFidelidade()', function () {

  it('Caso o cliente seja fidelidade retorne true', function () {
    expect(isFidelidade("Fidelidade")).to.equal(true);
  })

  it('Caso o cliente não seja fidelidade retorne false', function () {
    expect(isFidelidade("Regular")).to.equal(false);
  })

})

describe("hotelMaisBarato()", function(){

    it('Retorne o nome do hotel mais barato para a soma de uma lista de diarias', function () {
        expect(hotelMaisBarato("Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)", hoteis)).to.equal("Mar Atlântico");
      })

    it('Retorne o nome do hotel mais barato para a soma de uma lista de diarias', function () {
        expect(hotelMaisBarato("Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)", hoteis)).to.equal("Mar Atlântico");
      })
      
    it('Retorne o nome do hotel mais barato para a soma de uma lista de diarias', function () {
        expect(hotelMaisBarato("Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)", hoteis)).to.equal("Mar Atlântico");
      })

})

/*
describe('hotelmaisbarato() #1', function () {
  it('Deve retornar o nome do hotel mais barato a partir de um array de datas', function () {
    expect(hotelMaisBarato("Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)")).to.deep.equal("Mar Atlântico");
  })
})
*/