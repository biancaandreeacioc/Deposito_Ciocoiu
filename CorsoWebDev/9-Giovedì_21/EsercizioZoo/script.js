//seleziono elementi
const titolo=document.getElementById("titoloZoo");
const discrizione=document.querySelector(".descrizione");
const animali=document.getElementById("animali");

//bottoni
const btnLeone = document.getElementById("btnLeone");
const btnElefante = document.getElementById("btnElefante");
const btnRimuovi = document.getElementById("btnRimuovi");
const btnTitolo = document.getElementById("btnTitolo");

//modifica titolo zoo
btnTitolo.addEventListener("click", function(){
    //chiedo nuovo titolo
    let nuovoTitolo=prompt("inserisci il nuovo titolo dello zoo");
    //controllo che non sia vuoto
    if(nuovoTitolo==""){
        alert("Titolo non inserito");
    }else{
        titolo.textContent=nuovoTitolo;
    }
});


// aggiungi leone
btnLeone.addEventListener("click", function(){
    //creo card
    let card=document.createElement("div");
    //qui ho chiesto aiuto all'ia perchè non sapevo come crearla dinamicamente
    card.classList.add("card");
    card.innerHTML = 
        <h3>Leone</h3>
        "<p>Il leone è il re della savana.</p>"
        ;

        animali.appendChild(card);
});