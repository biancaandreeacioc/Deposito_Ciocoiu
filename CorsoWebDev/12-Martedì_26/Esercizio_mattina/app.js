//importo http
const http=require("http");

// Importo il modulo prompt-sync
const prompt = require("prompt-sync")();

// Importo il modulo esterno
const gestioneTesto = require("./GestioneTesto");

//chiedo una frase all'utente
let frase=prompt("Inserisci frase: ");
//stampo la frase inserita
console.log("Testo originale: " + frase);

//uso le funzioni definite prima
//funzione che trasforma in maiuscolo
let testoMaiuscolo=gestioneTesto.maiuscolo(frase);
//stampo la frase in maiuscola
console.log("Testo maiuscolo: " + testoMaiuscolo);

//funzione che conta i caratteri
let numeroCaratteri=gestioneTesto.contaCaratteri(frase);
//stampo il numero di caratteri
console.log("Numero caratteri: " + numeroCaratteri);

//chiedo una lettera da cercare
let lettera = prompt("Inserisci lettera da cercare: ");
//funzione che controlla se contiene la lettera
let controllo = gestioneTesto.contieneLettera(frase, lettera);
//stampo se contiene lettera
console.log("Contiene lettera: " + controllo);

//creo il server
const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end(
        "Testo originale: " + frase + "\n" +
        "Testo maiuscolo: " + testoMaiuscolo + "\n" +
        "Numero caratteri: " + numeroCaratteri + "\n" +
        "Contiene lettera: " + controllo
    );
});

// avvio server
server.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
});