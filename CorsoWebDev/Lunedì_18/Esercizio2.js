// input utente
const prompt = require("prompt-sync")();

// definiscovariabili
ruolo1="";
ruolo2="";
ruolo3="";

//definisco imput utente ruolo 1
ruolo1=prompt("inserisci ruolo 1: ");

// primo ruolo
switch (ruolo1) {
  case "player":
        console.log("PLAYER: puoi giocare");
        break;
  case "moderator":
        console.log("MODERATOR: controllo parziale");
        break;
  case "admin":
        console.log("ADMIN: controllo totale");
        break;
  default:
    console.log("Ruolo non valido");
}

//definisco imput utente ruolo 2
ruolo2=prompt("inserisci ruolo 2: ");
// secondo ruolo
switch (ruolo2) {
  case "player":
        console.log("PLAYER: puoi giocare");
        break;
  case "moderator":
        console.log("MODERATOR: controllo parziale");
        break;
  case "admin":
        console.log("ADMIN: controllo totale");
        break;
  default:
    console.log("Ruolo non valido");
}

//definisco imput utente ruolo 3
ruolo3=prompt("inserisci ruolo 3: ");
// terzo ruolo
switch (ruolo3) {
  case "player":
        console.log("PLAYER: puoi giocare");
        break;
  case "moderator":
        console.log("MODERATOR: controllo parziale");
        break;
  case "admin":
        console.log("ADMIN: controllo totale");
        break;
  default:
    console.log("Ruolo non valido");
}