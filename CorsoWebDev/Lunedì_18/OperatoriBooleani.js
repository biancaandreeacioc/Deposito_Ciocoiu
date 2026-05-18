//variabili
let eta=20;
let patente=true;
let abbonamento=false;

//condizioni con and
//entrambe devo essere vere
if (eta>=18 && patente==true){
    console.log("puoi guidare");
}

//condizione con or
//basta che una delle condizioni sia vera
if(eta<18 || abbonamento===true){
    console.log("hai uno sconto");
}

//not
//inverte valore booleano
if(!abbonamento){
    console.log("non hai abbonamento attivo");
}

//condizione più complessa
if((eta>=18 && patente)|| abbonamento){
    console.log("accesso consentito");

} else {
    console.log("accesso negato");
}