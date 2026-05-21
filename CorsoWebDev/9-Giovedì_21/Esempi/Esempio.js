//selezionare tramite id
const titolo=document.getElementById("titolo");
//selezionare tramite classe css
const descrizione=document.querySelector(".descrizione");
//selezione del bottone
const bottone=document.getElementById("bottone");
//gestione evento click
bottone.addEventListener("click", function(){
    //modifica titolo
    titolo.innerText="titolo modificaco con js";
    //modifica paragrafo
    descrizione.innerHTML="il contenuto è stato aggiornato dinamicamente";
});