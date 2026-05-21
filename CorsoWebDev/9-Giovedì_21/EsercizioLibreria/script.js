//seleziono elementi dom
const form=document.getElementById("formInserimento");
const contenitore=document.getElementById("contenitoreLibri");
const menuButton=document.getElementById("menuButton");
const menu=document.getElementById("menu");

// funzione per il form che fa partire la funzione quando si preme sul pulsante aggiungi
form.addEventListener("submit", function(event){
    //blocco refresh automatico
    event.preventDefault();
    //recupero i valori inseriti
    const titoloLibro=document.getElementById("titoloLibro").value;
    const autore=document.getElementById("autore").value;
    const genere=document.getElementById("genere").value;
    const anno=document.getElementById("anno").value;
    const descrizione=document.getElementById("descrizione").value;

    //creo card
    const card=document.createElement("div");
    card.classList.add("card");

    // questo l'ho chiesto all'ia perchè non  riuscivo a farlo
    //con $ prendo il valore della variabile e lo inserisco nella card
    card.innerHTML = `
    <h3>${titoloLibro}</h3> / 
    <p><strong>Autore:</strong> ${autore}</p>
    <p><strong>Genere:</strong> ${genere}</p>
    <p><strong>Anno:</strong> ${anno}</p>
    <p>${descrizione}</p>
    `;
    //aggiungo la card al contenitore principale
    contenitore.appendChild(card);
    //reset form
    form.reset();
});