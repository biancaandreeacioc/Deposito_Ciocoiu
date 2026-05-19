// input utente
const prompt=require("prompt-sync")();

// creo array per parole inserite
let parole=[];

// chiedo all'utente quante parole vuole inserire
let numeroparole=Number(prompt("Quante parole vuoi inserire? "));

let condizione=true;
// creo ciclo
do{
    // finchè non arrivo al numero di parole indicato
    for(let i=0; i<numeroparole; i++){

        // faccio inserire le parola 
        let parola=prompt("inserisci parola oppure fine per uscire ");
        // se la parola=fine allora esce
        if(parola==="fine"){
            console.log("esci");
            break;
        }else if(valida(parola)){//se è valida inserisce
            parole.push(parola);
        }else{ //altrimenti stampa e interrompe
            console.log("Parola non salvata");
        }
        //quando il for arriva alla lunghezza delle parole
        condizione=false;
    }
}while(condizione);
console.log("hai inserito " + parole);

//funzione per verificare se parola è valida
function valida(parola){
    if(parola.length > 0){
        console.log("Parola valida");
        return true;
    }else{
        console.log("Parola non valida");
        return false;
    }

}

// funzione per contare quante parole sono state inserite
function contaPar(parole){
    return parole.length;
}
console.log("hai inserito " + contaPar(parole) + " parole");

//funzione per trovare la parola più lunga
function parolaPiuLunga(parole){
    // considero più lunga la prima parola, ovvero posizione 0
    let parolalunga=parole[0];
    // definisco il for che mi controlla la lunghezza
    for(let x=0; x<parole.length; x++){
        if(parole[x].length > parolalunga.length){ //se è più lunga
            parolalunga=parole[x];
        }
    }
    return parolalunga;
}
console.log("La parola più lunga è: " + parolaPiuLunga(parole));

//funzione per trovare la parola più corta
function parolaPiuCorta(parole){
    // considero più lunga la prima parola, ovvero posizione 0
    let parolacorta=parole[0];
    // definisco il for che mi controlla la lunghezza
    for(let x=0; x < parole.length; x++){
        if(parole[x].length < parolacorta.length){ //se è più corta
            parolacorta=parole[x];
        }
    }
    return parolacorta;
}
console.log("La parola più corta è: " + parolaPiuCorta(parole));

