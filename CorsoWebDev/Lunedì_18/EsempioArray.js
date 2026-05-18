// ARRAY NUMERICO

// Creo un array vuoto
let numeri = [1, 2, 3];

// accesso agli elementi
console.log(numeri[0]); //1

// aggiungi elemento
numeri.push(4); //aggiunge in fondo
numeri.unshift(0); //aggiunge all'inizio

//rimozione elementi
numeri.pop(); //rimuove ultimo->[0,1,2,3]
numeri.shift(); //rimuove primo

//interazione
numeri.forEach(n =>console.log(n));

//trasformazione
let doppi=numeri.map(n=>n*2); //[2,4,6]

//filtro
let maggioriDiUno=numeri.filter(n=>n>1); //[2,3]

//ricerca
let trovato=numeri.find(n=>n===2); //2

//lunghezza
console.log(numeri.length); //3

// array con ciclo for-of
let numero=[10, 20, 30];
for (let valore of numero){
    console.log(valore); //10, 20, 30
}

//su stringa
let string="ciao";
for (let valore of string){
    console.log(valore); 
    console.log(" "); 
}

