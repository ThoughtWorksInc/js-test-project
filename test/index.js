/*

hoteis.forEach((hotel) => {
    console.log(hotel.nome);
})

hoteis.map((hotel) => {
    console.log(hotel.diariaRegular);
})

*/

// OBJETO HOTEL

let hoteis = [{
    name: "Parque das flores",
    classificacao: 3,
    valorRegular: {semana: 110, fimDeSemana: 90},
    valorFidelidade: {semana: 80, fimDeSemana: 80}
},{
    name: "Jardim Botânico",
    classificacao: 4,
    valorRegular: {semana: 160, fimDeSemana: 60},
    valorFidelidade: {semana: 110, fimDeSemana: 50}
    },{
    name: "Mar Atlântico",
    classificacao: 5,
    valorRegular: {semana: 220, fimDeSemana: 150},
    valorFidelidade: {semana: 100, fimDeSemana: 40}
    }]



//

let testparams = "Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)";

// INICIO

let  hotelMaisBarato = (params) => {
    
// DECLARACAO DE VARIAVEIS

    let hotelItem = []
    

// FUNÇÕES AUXILIARES DE VALIDAÇÃO

    let isFimDeSemana = (date) => {
        d = new Date(date)
      //  console.log("DATA : " + d);
        return d.getDay() === 6 || d.getDay() === 0;
   
    }

    let isFidelidade = (cliente) => {

        return cliente == "Fidelidade";

    }


// RECEBE STRING - QUEBRA A STRING -  ATIBUI TIPO DE CLIENTE E TIPOCLIENTE E DATAS A DATASARRAY

    let tipoCliente = params.split(":", 1);    
    console.log(" ");
    console.log("TIPOCLIENTE: "+ tipoCliente);

    let datesArray = params.split(":").join(", ").split(", ");
    console.log(" ");
    datesArray.shift();
    console.log("ARRAY DE DATAS: "+ datesArray);
    //let datesArray = params.split(/([0-9]{2}[a-zA-Z]{3}[0-9]{4}[(]([a-zA-Z]{3}|[a-zA-Z]{4})[)])/);
    
// FOREACH DATA EM DATAARRAY
//console.log("DATES ARRAY :  "+datesArray);

let diariasArray = datesArray.map((date)=> {
    return hoteis.map((hotel) => {
        
        let diaria = {
            name: hotel.name,
            valorDiaria: hotel.valorFidelidade.fimDeSemana,
            dataDiaria: date,
            classificacao: hotel.classificacao
        }

        return diaria;
    })
    
});



diariasArray.forEach((hotel) => {
    return console.log(hotel[0].name);
})





/*
console.log("  ");
console.log("DATA: "+ date);
console.log("FIM DE SEMANA? : "+ isFimDeSemana(date));
console.log("HOTEL: "+ hotel.name);
console.log("VALOR DIARIA: "+ hotel.valorFidelidade.fimDeSemana);
console.log("  ");
    */
    
    /*
    diariasArray.nome = hotel.name;
    diariasArray.diarias.push(hotel.valorFidelidade.fimDeSemana);
    diariasArray.datas.push(date);
    diariasArray.classificacao = hotel.classificacao;
    */
    /*
    */
    
    /*   datesArray.map((date) => {
        
        if (isFimDeSemana(date)) {
            if (isFidelidade(tipoCliente)) {

                hoteis.map((hotel) => {

                    console.log("  ");
                    console.log("DATA: "+ date);
                    console.log("FIM DE SEMANA? : "+ isFimDeSemana(date));
                    console.log("HOTEL: "+ hotel.name);
                    console.log("VALOR DIARIA: "+ hotel.valorFidelidade.fimDeSemana);
                    console.log("  ");
                    
                });
                
            } else {
                
                hoteis.map((hotel) => {

                    console.log("  ");
                    console.log("DATA: "+ date);
                    console.log("FIM DE SEMANA? : "+ isFimDeSemana(date));
                    console.log("HOTEL: "+ hotel.name);
                    console.log("VALOR DIARIA: "+ hotel.valorRegular.fimDeSemana);
                    console.log("  ");
                    
                });

            }
            
        } else {
            
            if (isFidelidade(tipoCliente)) {

                hoteis.map((hotel) => {

                    console.log("  ");
                    console.log("DATA: "+ date);
                    console.log("FIM DE SEMANA? : "+ isFimDeSemana(date));
                    console.log("HOTEL: "+ hotel.name);
                    console.log("VALOR DIARIA: "+ hotel.valorFidelidade.semana);
                    console.log("  ");
                    
                });
                
            } else {
                
                hoteis.map((hotel) => {
                    
                    console.log("  ");
                    console.log("DATA: "+ date);
                    console.log("FIM DE SEMANA? : "+ isFimDeSemana(date));
                    console.log("HOTEL: "+ hotel.name);
                    console.log("VALOR DIARIA: "+ hotel.valorRegular.semana);
                    console.log("  ");

                });

            }
            
        }
        //console.log("É FIM DE SEMANA? " + isFimDeSemana(date) +" "+ date );
        //console.log("É FIDELIDADE? " + isFidelidade(tipoCliente)+" "+"|"+tipoCliente+"|");

    });

    */

    // RETURN FINAL

    return 




}

hotelMaisBarato(testparams);