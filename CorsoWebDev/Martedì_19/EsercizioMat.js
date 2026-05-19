// input utente
const prompt=require("prompt-sync")();

// definisco l'array dove andranno salvati i risultati
let risultati=[];
// let risultsom=[];
// let risultsot=[];
// let risultmolt=[];
// let risultdiv=[];

// definisco la funzione somma
function somma(a, b){
    return a+b;
}
//funzione sottrazione
function sottrazione(a, b){
    return a-b;
}
//funzione moltiplicazione
function moltiplicazione(a, b){
    return a*b;
}
//funtion divisione
function divisione(a, b){
    return a/b;
}

//definisco variabile per la scelta
let scelta="";

//definisco ciclo while
while(scelta!="stop"){
    scelta=prompt("Scegli: " + "1:somma "+"2:sottrazione "+"3:moltiplicazione "+"4:divisione " + "o digita stop per uscire");

    //condizione di uscita
    if(scelta==="stop"){
        console.log("Hai scelto di uscire");
        break;
    }

    //faccio inserire i numeri
    // let a=Number(a);
    // let b=Number(b);
    let a=Number(prompt("numero 1: "));
    let b=Number(prompt("numero 2: "));

    // definisco il risultato delle operazioni inserite dall'utente
    let risultato;

    //creo switch per le opzioni scelta
    switch(scelta){
        case "1":
            risultato=somma(a,b);
            console.log("il risultato della somma è: " + risultato);
            // risultsom.push(risultato);
            break;

        case "2":
            risultato=sottrazione(a, b);
            console.log("il risultato della sottrazione è: " + risultato);
            // risultsot.push(risultato);
            break;

        case "3":
            risultato=moltiplicazione(a, b);
            console.log("il risultato della moltiplicazione è: " + risultato);
            // risultmolt.push(risultato);
            break;

        case "4":
            risultato=divisione(a, b);
            console.log("il risultato della divisione è: " + risultato);
            // risultdiv.push(risultato);
            break;

        default:
            console.log("operazione non valida");
    }

    risultati.push(risultato);
    // risultati.push(risultsom);


}
console.log("Ecco i tuoi risultati: " + risultati);