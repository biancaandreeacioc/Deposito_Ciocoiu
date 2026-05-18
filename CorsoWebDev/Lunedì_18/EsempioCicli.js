// ciclo for

for(let i=0; i<3; i++){
    console.log(i); //0, 1, 2
}

//ciclo while

let x=0;
while(x<3){
    console.log(x); //0, 1, 2
    x++;
}

// ciclo do while

let y=0;

do{
    console.log(y); //0, 1, 2
    y++;
}while(y<3);

//while booleano
//emepio con uscita tramite input utente
//input per input da console
const prompt=require("prompt-sync")();

//variabile booleana
let attivo=true;
//ciclo
while(attivo){
    //input utente
    let comando=prompt("scrivi qualcosa o esci per uscire");

    //controllo
    if(comando==="esci"){
        console.log("programma terminato");
        attivo=false;

    }else{
        console.log("hai scritto: "+comando);
    }
}