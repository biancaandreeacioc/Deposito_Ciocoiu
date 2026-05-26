//funzione che trasformi il testo in maiuscolo
//toUpperCase mi permette di trasformarlo in maiuscolo
function maiuscolo(testo){
    let risultato= testo.toUpperCase();
    console.log("Testo maiuscolo: " + risultato);
    return risultato;
}

//funzione che conti il numero di caratteri
function contaCaratteri(testo){
    let contatore=0;
    for(let i=0; i<testo.length; i++){
        contatore++;
    }
    console.log("Numero caratteri: " + contatore);
    return contatore;
}

//funzione che controlla se una parola contiene una lettera
function contieneLettera(parola, lettera){
    for(let i=0; i<parola.length; i++){
        if(parola[i]==lettera){
            console.log("La parola contiene la lettera: " + lettera);
            return true;
        }
    }
    //se il ciclo finisce senza trovarla
    console.log("La parola non contiene la lettera: " + lettera);
    return false;
}

// Esporta le funzioni
module.exports = {
    maiuscolo,
    contaCaratteri,
    contieneLettera
};