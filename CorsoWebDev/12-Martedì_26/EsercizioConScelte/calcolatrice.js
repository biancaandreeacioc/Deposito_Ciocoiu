// recupero il bottone
let bottoneSomma = document.getElementById("bottoneSomma");
let bottoneSottrazione = document.getElementById("bottoneSottrazione");

// quando clicco il bottone esegue la funzione
bottoneSomma.addEventListener("click", somma);
bottoneSottrazione.addEventListener("click", sottrazione);

//funzione somma
function somma(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let risultato = n1 + n2;
    document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
}

//funzione sottrazione
function sottrazione(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let risultato = n1 - n2;
    document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
}

//funzione moltiplicazione



