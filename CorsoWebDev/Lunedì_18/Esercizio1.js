//input utente
const prompt = require("prompt-sync")();

//scelta menù
let opzioni = prompt("scegli dal menù: panino, pizza o kebab");
console.log("hai scelto:");

// definisco variabili
let condimento="";
let condimento1="";
let condimento2="";

//switch

switch (opzioni){
    case "panino":
        // creo variabile
        panino="panino";
        // input utente per condimento
        condimento=prompt("Vuoi un condimento? Inseriscilo: ");
        // stampo la scelta
        console.log("panino");
        console.log("panino con " + condimento);
        break;
    case "pizza":
        pizza="pizza"
        condimento1=prompt("Vuoi un condimento? Inseriscilo: ");
        console.log("pizza");
        console.log("pizza con " + condimento1);
        break;
    case "kebab":
        kebab="kebab"
        condimento2=prompt("Vuoi un condimento? Inseriscilo: ");
        console.log("kebab"); 
        console.log("kebab con " + condimento2);
        break;
    default:
        console.log("scelta non valida");
}

