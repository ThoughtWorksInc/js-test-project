'use strict'

const chai = require('chai')
const Entrada =  require('../src/booking')
const expect = chai.expect    
const hotels = [
  { name: 'Lakewood', rating: '3', amountWeek: 110, amountWeekReward: 80, amountWeekend: 90, amountWeekendReward: 80 },
    { name: 'Bridgewood', rating: '4', amountWeek: 160, amountWeekReward: 110, amountWeekend: 60, amountWeekendReward: 50 },
    { name: 'Ridgewood', rating: '5', amountWeek: 220, amountWeekReward: 100, amountWeekend: 150, amountWeekendReward: 40 }
]
var d = new Date('16Mar2009');
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];


describe('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)', function () {
  it('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)', function () {
    const hotel = Entrada.adicionar('regular', ['16Mar2009', '17Mar2009', '18Mar2009'])
    expect(hotel).to.equal(hotels[0].name);
  })
})

describe('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)', function () {
  it('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)', function () {
    const hotel = Entrada.adicionar('regular', ['20Mar2009', '21Mar2009', '22Mar2009'])
    expect(hotel).to.equal(hotels[1].name);
  })
})



describe('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)', function () {
  it('should return Ridgewood', function () {
    const hotel = Entrada.adicionar('reward', ['26Mar2009', '27Mar2009', '28Mar2009'])
    expect(hotel).to.equal(hotels[2].name);
  })
})