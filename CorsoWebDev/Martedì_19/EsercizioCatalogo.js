// input utente
const prompt=require("prompt-sync")();

//mi creo l'array che conterrà i prodotti
let prodotti=[];
// definisco condizione per il ciclo
let continua="si";

// faccio il ciclo per inserire i prodotti
while(continua==="si"){
    //l'utente inserisce il prodotto
    let nome=prompt("Inserisci il nome del prodotto: ");
    // il prezzo 
    let prezzo=Number(prompt("Inserisci il prezzo €: "));
    // la quantità prodotti
    let quantita=Number(prompt("Inserisci quantità: "));

    // la gestione dei casi limiti l'ho vista da lei perchè non riuscivo a farla
    //ma non funziona :(
    if (
        nome.length === "" ||
        isNaN(prezzo) ||
        isNaN(quantita)
    ) {
        console.log("Prodotto non inserito");
        return;
    }

    //creo l'oggetto che andrà nell'array prodotti
    //definisco il dizionario chiavi valori
    let prodotto={
        nome: nome,
        prezzo: prezzo,
        quantita: quantita
    };

    //inserisco i prodotti nell'array
    prodotti.push(prodotto);

    //chiedo se vuole continuare
    continua=prompt("Vuoi inserire un altro prodotto? Si per continuare, no per uscire ");

}

//stampo array con prodotti
console.log("I prodotti inseriti sono: ")
console.log(prodotti);

//definisco funzione per calcolare il valore totale del magazzino
//prezzo*quantità per ogni prodotto
function valoreTotMag(prodotti){
    //inizializzo il mio contattore
    let totale=0;
    //controllo tutti i prodotti fino alla fine dell'array
    for(let i=0; i<prodotti.length; i++){
        //calcolo valore del singolo prodotto
        //prendo il prodotto nella posizione i ricavando il prezzo e la quantità che moltiplico
        let valoreProdotto=prodotti[i].prezzo*prodotti[i].quantita;
        //aggiungo al totale
        totale= totale+ valoreProdotto;
    }
    return totale;
}
console.log("Valore totale magazzino: " + valoreTotMag(prodotti));

//funzione per trovare il prodotto con il prezzo più alto
function prezzoAlto(prodotti){
    //considero il primo prodotto come quello con il prezzo più alto
    let alto=prodotti[0];
    // controllo tutti i prodotti
    for(let i=0; i<prodotti.length; i++){
        //se ne trova uno più costoso, aggiarna la variabile
        if(prodotti[i].prezzo>alto.prezzo){
            alto=prodotti[i];
        }
    }
    //vedo il prodotto che costa di più
    return alto;
}
console.log("Il prodotto con il prezzo più alto è: ");
console.log(prezzoAlto(prodotti));

//funzione per filtrare i prodotti con quantità maggiore di 0
function prodottiDisp(prodotti){
    //creo un array per salvare i prodotti disponibili
    let disponibile=[];
    //controllo i prodotti presenti
    for(let i=0; i<prodotti.length; i++){
        // controllo la quantità che deve essere maggiore di 0 affinchè un prodotto ci sia
        if (prodotti[i].quantita > 0){
            //inserisco nell'array
            disponibile.push(prodotti[i]);
        }
    }
    return disponibile;
}
console.log("Prodotti disponibili: ");
console.log(prodottiDisp(prodotti));

//funzione per aggiungere la proprietà disponibile
function propDisp(prodotti){
    for(let i=0; i<prodotti.length; i++){
        // controllo la quantità che deve essere maggiore di 0 
        if (prodotti[i].quantita > 0){
            //aggiungo la proprietà disponibile
            prodotti[i].disponibile=true;
        }else{
            prodotti[i].disponibile=false;
        }
    }
    return prodotti;
}
console.log("Prodotti con proprietà disponibile: ");
console.log(propDisp(prodotti));

//funzione per creare array solo con i nomi
function nomiProd(prodotti){
    //creo array per mettere i nomi
    let nomi=[];
    //controllo i prodotti
    for(let i=0; i<prodotti.length; i++){
        //inserisco il nome nell'array
        nomi.push(prodotti[i].nome);   
    }
    return nomi;
}
console.log("I nomi dei prodotti sono: ");
console.log(nomiProd(prodotti));


