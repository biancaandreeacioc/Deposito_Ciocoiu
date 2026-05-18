//input utente
const prompt=require("prompt-sync")();

// definisco le variabili
let numeri=[];
let pari=[];
let dispari=[];
let somma=0;
let controllore=true;


while(controllore){
    // imput utente
    let input=(prompt("Inserisci un numero intero o 0 per terminare. ")); 
    // definisco variabile N che deve essere un numero
    let N=Number(input);
    // se non è un numero allora messaggio
    if(input!=N){
        console.log("Devi inserire un numero");
    // se è un numero
    }else{
        // controllo condizione uscita
        if (N===0){
            console.log("Hai finito");
            // aggiorno il controllore a false quindi esce dal ciclo
            controllore=false;
        }else{
            // inserisco numeri in array
            numeri.push(N);
    }

        console.log("Numeri inseriti: " + numeri);
    }
}
// definisco array min e max
let min=numeri[0];
let max=numeri[0];
// ciclo per dividere pari e dispari
for(let i=0; i<numeri.length; i++){
    
    // verifico numeri pari e dispari
    if(numeri[i]%2===0){
        pari.push(numeri[i]);
    }else{
        dispari.push(numeri[i]);
    }

    // verifico min e max
    if (numeri[i] < min){ 
        min = numeri[i];
    }
    if(numeri[i]>max){
        max=numeri[i];
    }
    
    // calcolo la somma
    somma=somma+numeri[i];

}

// stampa risultati
console.log("Array completo: " + numeri);
console.log("Numeri pari:" + pari);
console.log("Numeri dispari:" + dispari);
console.log("Somma totale:" + somma);
console.log("Massimo:" + max);
console.log("Minimo:" + min);




