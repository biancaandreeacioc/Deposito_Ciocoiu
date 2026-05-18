// funzioni
function somma(a, b){
return a+b;
}

let risultato=somma(3,5);
console.log(risultato); //8

// funzione espressa
const moltiplica=function(a,b){
    return a*b;
}
console.log(moltiplica(4, 2)); //8

//arrow function
const sottrai=(a,b)=>a-b;
console.log(sottrai(10,3));//7

// parametri e return
function saluta(nome){
    return "Ciao"+nome;

}
let messaggio=saluta("Bianca");
console.log(messaggio); //Ciao Bianca