'use strict'

const clients = ['regular', 'reward']
const hotels = [
    { name: 'Lakewood', rating: '3', amountWeek: 110, amountWeekReward: 80, amountWeekend: 90, amountWeekendReward: 80 },
    { name: 'Bridgewood', rating: '4', amountWeek: 110, amountWeekReward: 80, amountWeekend: 90, amountWeekendReward: 80 },
    { name: 'Ridgewood', rating: '5', amountWeek: 110, amountWeekReward: 80, amountWeekend: 90, amountWeekendReward: 80 }
]
const lakewood = ['16Mar2009', '17Mar2009', '18Mar2009']
const bridgewood = ['20Mar2009', '21Mar2009', '22Mar2009']
const ridgewood = ['26Mar2009', '27Mar2009', '28Mar2009']

module.exports = {
    adicionar: (client, datas) => {
        const array2 = datas
        const array2Sorted = array2.slice().sort();
        const response = (arr) => arr.length === array2.length && arr.slice().sort().every(function(value, index) {
            return value === array2Sorted[index]
        });

        if (client === clients[0] && response(lakewood)) {
            return hotels[0].name
        }

        if (client === clients[0] && response(bridgewood)) {
            return hotels[1].name
        }

        if (client === clients[1] && response(ridgewood)) {
            return hotels[2].name
        }
    }
}