// Chiedere email all'utente
var emailUtente = prompt("Inserisci la tua email");
// Creare una lista con email consentite
var listaEmail = ["matteo@gmail.com", "luca@gmail.com", "marco@gmail.com", "andrea@gmail.com"];
var emailVerificata = false;
// Verificare se email inserita è vera o falsa
for (var i = 0; i < listaEmail.length; i++) {
  var mail = listaEmail[i];
  if (emailUtente == mail) {
    emailVerificata = true;
  }
}
console.log(emailVerificata);
// Stampare messaggio in base alla condizione data
if (emailVerificata == true) {
  console.log("Email esatta puoi effettuare l'accesso!");
} else {
  console.log("Non hai inserito l'email correttamente!");
}
