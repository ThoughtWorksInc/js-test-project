
let testparams = "Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)";

let hoteisAtuais = [{
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
    }];



    // VERIFICA SE É FIM DE SEMANA
   const isFimDeSemana = (date) => {
        d = new Date(date)
      //  console.log("DATA : " + d);
        return d.getDay() === 6 || d.getDay() === 0;
   
    }

    exports.isFimDeSemana = isFimDeSemana;

    // VERIFICA SE É CLIENTE FIDELIDADE
   const isFidelidade = (cliente) => {
        return cliente == "Fidelidade";
    }

    exports.isFidelidade = isFidelidade;



   exports.hotelMaisBarato = (params, listaHoteis) => {
  
    let hoteis = listaHoteis;

// 4 - QUEBRA DA STRING RECEBIDA EM VARIAVEIS DIFERENTES - ATIBUI TIPO DE CLIENTE E TIPOCLIENTE E DATAS A DATASARRAY

    const tipoCliente = params.split(":", 1);    
    const datesArray = params.split(":").join(", ").split(", ");
    datesArray.shift();

    
// 5 - FAZ UM LOOP EM CADA DATA DIARIA, COLOCANDO TUDO EM UM ARRAY DE DIARIAS COM OBJETOS DE DIARIA, CONTENTO O NOME E VALOR DA DIARIA NA DATA DESEJADA   
    const diariasArray = datesArray.map((date)=> {
        return hoteis.map((hotel) => {
            
            let diaria = {

                name: hotel.name,
                valorDiaria: (isFimDeSemana(date)?(isFidelidade(tipoCliente)? hotel.valorFidelidade.fimDeSemana : hotel.valorRegular.fimDeSemana) : (isFidelidade(tipoCliente)? hotel.valorFidelidade.semana : hotel.valorRegular.semana)),       
                dataDiaria: date,
            }

            return diaria;

        })
        
    }).flat();

    
// 6 - PASSA PELO ARRAY DE DIARIAS GERANDO 3 NOVOS ARRAYS COM AS SOMAS DOS VALORES DE CADA HOTEL

    const parqueSum = diariasArray.filter((diaria) => {return diaria.name == "Parque das flores"}).reduce((total, n)=>{return total += n.valorDiaria;},0);
    const jardimSum = diariasArray.filter((diaria) => {return diaria.name == "Jardim Botânico"}).reduce((total, n)=>{return total += n.valorDiaria;},0);
    const marSum = diariasArray.filter((diaria) => {return diaria.name == "Mar Atlântico"}).reduce((total, n)=>{return total += n.valorDiaria;},0);  
    
    hoteis.forEach((hotel)=>{
        if (hotel.name == "Parque das flores"){
            hotel.totalDiarias = parqueSum;
        } 
        if (hotel.name == "Jardim Botânico" )  {
            hotel.totalDiarias = jardimSum;  
        }  
        if (hotel.name == "Mar Atlântico" )  {
            hotel.totalDiarias = marSum;      
        }  
    });

// 7  ADICIONA O VALOR TOTAL DAS DIARAIS 

    const HotelMaisBarato = hoteis.reduce((min, item, index, array) => 
    {
        if(item.totalDiarias < min.totalDiarias){
            return {totalDiarias: item.totalDiarias, name: item.name, classificacao: item.classificacao};
        }else if(item.totalDiarias == min.totalDiarias && item.classificacao >= min.classificacao){
            return {totalDiarias: item.totalDiarias, name: item.name, classificacao: item.classificacao}
        } else {
            return min;
        }
    }, hoteis[0]);


   return HotelMaisBarato.name;


}

