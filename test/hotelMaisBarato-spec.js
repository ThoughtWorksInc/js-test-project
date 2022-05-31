'use strict'

const { assert } = require('chai')
const chai = require('chai')
const expect = chai.expect
const hotelMaisBarato = require("../hotelMaisBarato")

describe('hotelmaisbarato() #1', function () {
  it('Deve retornar o nome do hotel mais barato a partir de um array de datas', function () {
    expect(hotelMaisBarato("Fidelidade: 25Mar2020(wed), 26Mar2020(thur), 27Mar2020(fri)")).to.deep.equal("Mar Atlântico");
  })
})