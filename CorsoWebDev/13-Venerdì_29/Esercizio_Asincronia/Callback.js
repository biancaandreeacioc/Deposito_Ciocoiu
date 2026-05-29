//importo prompt
const prompt=require("prompt-sync")();

//funzione con callback
function invertiStringaAsincrona(testo, callback){
    //eseguo il codice interno dopo 1500ms
    setTimeout(()=>{
        //converto la stringa in maiuscolo
        const inserimento=testo.toUpperCase();
        //esegue la callback passando il risultato
        callback(inserimento);
    }, 1500);
}
//chiedo all'utente di inserire una stringa
const stringa=prompt("Inserisci una stringa: ");
//messaggio mostrato prima dell'attesa
console.log("Attendi 1.5 secondi");
//chiamo la funzione
invertiStringaAsincrona(stringa,(inserimento)=>{
    //stampo il risultato finale in console
    console.log("Risultato: " + inserimento);
});

