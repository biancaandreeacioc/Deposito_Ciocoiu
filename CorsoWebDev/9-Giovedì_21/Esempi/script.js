//selezionare elementi
const titolo=document.getElementById("titolo");
const contenitore=document.getElementById("contenitore");
const bottone=document.getElementById("bottone");

//evento click
bottone.addEventListener("click", function(){
    //modifica testo del titolo
    titolo.innerText="contenuto aggiornato";
    //inserimento dinamico di html
    contenitore.innerHTML=""
    
});