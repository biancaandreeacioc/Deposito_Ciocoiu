// input utente
const prompt=require("prompt-sync")();

// definisco variabile
let N="";
N=Number(N);

// richiesta numero utente
N=prompt("Inserisci un numero intero positivo: ");

let pari=0;
let dispari=0;

if(N<=0){
    console.log("Errore, il numero non è intero positivo ");
} else{  
    // analizza numeri da 1 a N
    for(let i=1; i<=N; i++){

        if(i%2===0){
            pari++;
        }else{
            dispari++;
        }

    }
}

// stampo
console.log("numeri pari: " + pari);
console.log("numeri dispari: " + dispari);
