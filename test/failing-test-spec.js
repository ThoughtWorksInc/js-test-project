'use strict'

const chai = require('chai')
const expect = chai.expect

describe('A failing test', () => {
  it('should fail', () => {
    expect(true).to.equal(false);
  })
})
