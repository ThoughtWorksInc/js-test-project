'use strict'

const hotels = [
    { name: 'Lakewood', rating: '3', amountWeek: 110, amountWeekReward: 80, amountWeekend: 90, amountWeekendReward: 80 },
    { name: 'Bridgewood', rating: '4', amountWeek: 160, amountWeekReward: 110, amountWeekend: 60, amountWeekendReward: 50 },
    { name: 'Ridgewood', rating: '5', amountWeek: 220, amountWeekReward: 100, amountWeekend: 150, amountWeekendReward: 40 }
]

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

module.exports = {
    adicionar: (client, datas) => {

        console.log("client => ", client)

        let weekdays = [0,0]
        let hotelsTriage = [0,0,0]

        // descobre quantas das datas sao dias de semana ou fim de semana
        datas.map(
            data => {
                var d = new Date(data);
                var n = weekday[d.getDay()];
                n === 'Saturday' || n === 'Sunday' ? weekdays[0]++ : weekdays[1]++
            }
        )
        
        // descobre o valor total pra cada hotel
        hotels.map(
            (hotel,index) => {
                let weekd = 0
                let weeke = 0
                if(client === 'reward'){
                    weekd = hotel.amountWeekReward * weekdays[1]
                    weeke = hotel.amountWeekendReward * weekdays[0]
                } else {
                    weekd = hotel.amountWeek * weekdays[1]
                    weeke = hotel.amountWeekend * weekdays[0]
                }
                hotelsTriage[index] = weeke + weekd
            }
        )

        // descobre o menor valor entre os hoteis
        let menorValor = hotelsTriage.reduce((a,b) => Math.min(a,b))        
        console.log("menor valor entre os hoteis ", menorValor)

        // descobre os hoteis com menor valor
        let unicos = []
        hotelsTriage.filter(
            (item, index) => {
                
                console.log(item)
                console.log(menorValor)
                console.log("index ", index)
                if(item === menorValor){
                    console.log("indexou ", index)
                    unicos.push(index)
                }
            }
        )
        console.log("hotels com menores valores => ", unicos)
        
        let highestRatingUnicos = []

        hotels.forEach(
            (item,index) => {
                unicos.forEach(
                    itemu => {
                        if(index === itemu){
                            console.log("item.name ", item.name)
                            console.log("item.rating ", item.rating)
                            highestRatingUnicos.push(item.rating)
                        }
                    }
                )
            }
        )
        console.log("highestRatingUnicos ", highestRatingUnicos)

        // descobre o maior rating entre os hoteis de menor valor
        let maiorRating = highestRatingUnicos.reduce((a,b) => Math.max(a,b))

        console.log("maiorRating ", maiorRating)

        // encontra o indice dos hoteis com menor valor e maior rating
        let hoteisRetornados = []
        highestRatingUnicos.filter(
            (rating, index) => {
                if(rating === maiorRating.toString()){
                    hoteisRetornados.push(unicos[index])
                }
            }
        )
        
        console.log("hoteis com menor valor e maior rating ", hoteisRetornados)

        let finalname = ''
        hotels.filter(
            (hotel, index) => {
                hoteisRetornados.filter(
                    (h,i) => {
                        if(index === h){
                            console.log("a porra do hotel ", hotel.name)
                            finalname = hotel.name
                        }
                    }
                )
            }
        )

        return finalname
    }
}

// export default Entrada;