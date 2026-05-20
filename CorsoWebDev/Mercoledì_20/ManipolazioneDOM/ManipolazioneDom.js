//seleziona elementi tramite id
let titolo=document.getElementById("titolo");

let bottone=document.getElementById("bottone");

let lista=document.getElementById("lista");

//cambio titolo quando parte la pagina
titolo.innerHTML="Titolo modificato con JS";

//quando clicco il bottone
bottone.addEventListener("click", function(){
    //cambio il testo del paragrafo
    testo.innerHTML="testo modificato";
    //creo un nuovo elemento li
    let nuovoElemento=document.createElement("li");
    //inserisco testo nel nuovo elemento
    nuovoElemento.innerHTML="nuovo elemento";
    //aggiungo l'elemento alla lista
    lista.appendChild(nuovoElemento);
});