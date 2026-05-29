//importo prompt
const prompt=require("prompt-sync")();

//funzione con promise
function invertiStringaAsincrona(testo){
    //creo la primise
    return new Promise((resolve, reject)=>{
        //controllo se la stringa è vuota
        if (testo==""){
            //interrompi la promise 
            reject("Errore: nessun inserimento testo");
            //esco
            return;
        }
        setTimeout(()=>{
            //converto il testo
            const inserimento=testo.toUpperCase();
            //completo promise
            resolve(inserimento);
        }, 1500);
    });
}
//chiedo all'utente di inserire una stringa
const stringa=prompt("Inserisci una stringa: ");
//mostro messaggio
console.log("Attendi 1.5 secondi: ");

//chiamo funzione che restituisce la promise
invertiStringaAsincrona(stringa)
//se ha successo
.then((inserimento)=>{
    console.log("Risultato: " + inserimento);
})
//se invece c'è un errore
.catch((errore)=>{
    console.log("Errore nel caricamento");
});