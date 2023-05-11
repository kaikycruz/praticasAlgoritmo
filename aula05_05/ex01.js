var listaFrutas = ["morango", "banana", "abacate", "uva", "abacaxi"];

function pesquisa() {
  var fruta = input_fruta.value.toLowerCase();
  input_fruta.value = "";

  if (listaFrutas.indexOf(fruta) > -1) {
    div_lista.innerHTML += `A fruta ${fruta} existe na lista`;
  } else {
    div_lista.innerHTML += `Nao existe a fruta ${fruta} na lista`;
  }
}
