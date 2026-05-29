//importo il promp
const prompt = require("prompt-sync")();

//funzione che restituisce una promise
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
//funzione async
async function avviaFunzione() {
    //chiedo all'utente di inserire la stringa
    const stringa=prompt("Inserisci stringa: ");

    try{
        console.log("Attendi");
        //aspetto la promise
        const inserimento = await invertiStringaAsincrona(stringa);
        console.log("Risultato: " + inserimento);
    }catch(errore){
        //cattura l'errore generato dalla promise
        console.log(errore);
    }
}
//avvio funzione
avviaFunzione();
