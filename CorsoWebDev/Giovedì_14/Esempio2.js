//variabili, tipi primitivi
let valore=10;//number
valore="ciao";//ora è string
valore=true;//ora è boolean

let x;//undefined
let y=null;//null

let id=Symbol("id");//symbol
let grande=12345678901234567890n;//bigint

//constanti
const PI=3.14;

//PI=3.1415; //Errore: riassegnazione non consentita

const numeri=[1,2];

numeri.push(3); //consentito: modifica del contenuto

//scope
let globale="visibile ovunque";

if(true){
    let locale="solo nel blocco";
    console.log(globale);//ok
    console.log(locale);//ok
}
//console.log(locale); //errore

//variabile-hosting
//console.log(a); //Errore: non accessibile prima della dichiarazione
let a=10;

//Con var (comportamento diverso)
console.log(b);//undefined(non errore)
var b=20;