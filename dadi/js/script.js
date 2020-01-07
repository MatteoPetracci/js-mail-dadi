var dadoUno = Math.floor(Math.random() * 6) + 1;
console.log(dadoUno);
var dadoDue = Math.floor(Math.random() * 6) + 1;
console.log(dadoDue);

var giocatoreUno = dadoUno;
var giocatoreDue = dadoDue;

if (giocatoreUno > giocatoreDue) {
  console.log("Giocatore 1 ha vinto!");
} else if (giocatoreUno < giocatoreDue) {
  console.log("Giocatore 2 ha vinto!");
} else {
  console.log("Avete pareggiato!");
}
