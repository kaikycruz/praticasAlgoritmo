var baralho = [
    {
       carta:'Ás',
       valor: 1,
       naipe: 'Copas'
    },
    {
        carta:'Ás',
        valor: 1,
        naipe: 'Paus'
     },
     {
        carta:'Ás',
        valor: 1,
        naipe: 'Espadas'
     },
     {
        carta:'Ás',
        valor: 1,
        naipe: 'Ouros'
     },
     {
        carta:'2',
        valor: 2,
        naipe: 'Copas'
     },
     {
        carta:'2',
        valor: 2,
        naipe: 'Paus'
     },
     {
        carta:'2',
        valor: 2,
        naipe: 'Espadas'
     },
     {
        carta:'2',
        valor: 2,
        naipe: 'Ouros'
     },
     {
        carta:'3',
        valor: 3,
        naipe: 'Copas'
     },
     {
        carta:'3',
        valor: 3,
        naipe: 'Paus'
     },{
        carta:'3',
        valor: 3,
        naipe: 'Espadas'
     },{
        carta:'3',
        valor: 3,
        naipe: 'Ouros'
     },
     {
        carta:'4',
        valor: 4,
        naipe: 'Copas'
     },
     {
        carta:'4',
        valor: 4,
        naipe: 'Paus'
     },
     {
        carta:'4',
        valor: 4,
        naipe: 'Espadas'
     },
     {
        carta:'4',
        valor: 4,
        naipe: 'Ouros'
     },
     {
        carta:'5',
        valor: 5,
        naipe: 'Copas'
     },
     {
        carta:'5',
        valor: 5,
        naipe: 'Paus'
     },
     {
        carta:'5',
        valor: 5,
        naipe: 'Espadas'
     },
     {
        carta:'5',
        valor: 5,
        naipe: 'Ouros'
     },
     {
        carta:'6',
        valor: 6,
        naipe: 'Copas'
     },
     {
        carta:'6',
        valor: 6,
        naipe: 'Paus'
     },
     {
        carta:'6',
        valor: 6,
        naipe: 'Espadas'
     },
     {
        carta:'6',
        valor: 6,
        naipe: 'Ouros'
     },
     {
        carta:'7',
        valor: 7,
        naipe: 'Copas'
     },
     {
        carta:'7',
        valor: 7,
        naipe: 'Paus'
     },
     {
        carta:'7',
        valor: 7,
        naipe: 'Espadas'
     },
     {
        carta:'7',
        valor: 7,
        naipe: 'Ouros'
     },
     {
        carta:'Valete',
        valor: 0.5,
        naipe: 'Copas'
     },
      {
        carta:'Valete',
        valor: 0.5,
        naipe: 'Paus'
     }, 
      {
        carta:'Valete',
        valor: 0.5,
        naipe: 'Espadas'
     }, 
      {
        carta:'Valete',
        valor: 0.5,
        naipe: 'Ouros'
     },
     {
        carta:'Rainha',
        valor: 0.5,
        naipe: 'Copas'
     },
     {
        carta:'Rainha',
        valor: 0.5,
        naipe: 'Paus'
     },
     {
        carta:'Rainha',
        valor: 0.5,
        naipe: 'Espadas'
     },
     {
        carta:'Rainha',
        valor: 0.5,
        naipe: 'Ouros'
     },
     {
        carta:'Rei',
        valor: 0.5,
        naipe: 'Copas'
     },
     {
        carta:'Rei',
        valor: 0.5,
        naipe: 'Paus'
     },
     {
        carta:'Rei',
        valor: 0.5,
        naipe: 'Espadas'
     },
     {
        carta:'Rei',
        valor: 0.5,
        naipe: 'Ouros'
     },
]


function jogarSete() {
    div_botoes.innerHTML = `<button onclick="PedirCarta()">Pedir Outra Carta</button> 
    <button onclick="PassarVez()">Passar Vez</button> `

    div_jogo.innerHTML += `Jogador: <br>`
    PedirCarta()
    
}

var pontosUser = 0
var pontosBanca = 0
var historicoUser = []
var historicoUserPontos = []
var historicoBanca = []


function PedirCarta() {
    var sortearCarta = parseInt(Math.random() * baralho.length)
    var carta = baralho[sortearCarta]
    historicoUser.push(carta)
  

    var nomeCarta
    var naipeCarta
    var valorCarta

    for(var i = 0; i < historicoUser.length; i++) {
        nomeCarta = historicoUser[i].carta
        naipeCarta = historicoUser[i].naipe
        valorCarta = historicoUser[i].valor

        historicoUserPontos.push(valorCarta)        

       

       pontosUser += valorCarta

       

        if(pontosUser == 7.5) {
            div_jogo.innerHTML += `SETE E MEIO`
          }  else if (pontosUser > 7.5) {
            div_jogo.innerHTML += `(${pontosUser} pontos) ${nomeCarta} de ${naipeCarta} <br>`
            div_jogo.innerHTML += `JOGADOR ESTOUROU <br>`
          } else {
            div_jogo.innerHTML += `(${pontosUser} pontos) ${nomeCarta} de ${naipeCarta} <br>`
          }
    }

}