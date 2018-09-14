'use strict'

const chai = require('chai')
const expect = chai.expect
const sayHello = require('../src/helloWorld')

describe('A failing test', function () {
  it('should fail', function () {
    expect(true).to.equal(false);
  })
})

describe('A passing test', function () {
  it('should greet the world', function () {
    expect(sayHello()).to.equal('Hello World');
  })
})