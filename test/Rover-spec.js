"use strict"

const chai = require('chai')
const expect = chai.expect
const Rover = require('../src/Rover.js')

describe('A Rover', function () {
  it('should print the current postion', function () {
    let rover = new Rover(0, 0, 'N')

    expect("0 0 N").to.equal(rover.position)
  })

  it('should properly rotate left', function() {
    let rover = new Rover(0, 0, 'N')

    rover.instruct('L')

    expect("0 0 W").to.equal(rover.position)
  }) 

  it('should properly rotate right', function() {
    let rover = new Rover(0, 0, 'N')

    rover.instruct('R')

    expect("0 0 E").to.equal(rover.position)
  }) 

  it('should properly rotate more than once', function() {
    let rover = new Rover(0, 0, 'N')

    rover.instruct('LL')

    expect("0 0 S").to.equal(rover.position)
  }) 

  it('should change postion when moved', function() {
    let rover = new Rover(0, 0, 'N')

    rover.instruct('M')

    expect("0 1 N").to.equal(rover.position)
  })

  it('should piece it all together', function() {
    let rover = new Rover(1, 2, 'N')

    rover.instruct('LMLMLMLMM')

    expect("1 3 N").to.equal(rover.position)

    let rover2 = new Rover(3, 3, 'E')

    rover2.instruct('MMRMMRMRRM')

    expect("5 1 E").to.equal(rover2.position)
  })
})
