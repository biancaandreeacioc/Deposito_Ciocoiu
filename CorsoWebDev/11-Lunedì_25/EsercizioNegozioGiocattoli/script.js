// seleziono elementi
const formGiocattolo = document.getElementById("formGiocattolo");
const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const prezzo = document.getElementById("prezzo");
const eta = document.getElementById("eta");
const disponibile = document.getElementById("disponibile");

const messaggio = document.getElementById("messaggio");

const lista = document.getElementById("lista");
const cancellaLista = document.getElementById("cancellaLista");
const riepilogo = document.getElementById("riepilogo");

//salvo i gioccatoli
// controllo se siamo nella pagina di inserimento
//senza questo mi dava errore
if (formGiocattolo) {
formGiocattolo.addEventListener("submit", function(event){
    //blocco refresh pagina
        event.preventDefault();

        //recupero valori input
        const nomeGiocattolo = nome.value;
        const categoriaGiocattolo = categoria.value;
        const prezzoGiocattolo = prezzo.value;
        const etaGiocattolo = eta.value;
        const disponibilitaGiocattolo = disponibile.value;

        //creo oggetto giocattolo
        const giocattolo = {
            nome: nomeGiocattolo,
            categoria: categoriaGiocattolo,
            prezzo: prezzoGiocattolo,
            eta: etaGiocattolo,
            disponibile: disponibilitaGiocattolo
        };

        //recupero dati salvati
        let giocattoli = localStorage.getItem("giocattoli");
        //se non esiste creo array vuoto
        if (giocattoli === null) {
            giocattoli = [];
        } else {
            //trasformo jason in array. con parse leggo i dati
            giocattoli = JSON.parse(giocattoli);
        }
        //aggiungo nuovo giocattolo
        giocattoli.push(giocattolo);
        //salvo array aggiornato
        //per salvarlo devo trasformarlo in testo jason. questo l'ho chiesto all'ai
        localStorage.setItem("giocattoli", JSON.stringify(giocattoli));
        //messaggio conferma
        messaggio.innerText = "Giocattolo salvato.";
        //reset form
        formGiocattolo.reset();
        //elimino messaggio dopo 2 secondi
        setTimeout(function(){
            messaggio.innerText = "";
        }, 2000);
});
}

//mostro lista gioccatoli
//controllo se siamo nella pagina lista
if (lista) {
    //recupero jason
    const jsonString = localStorage.getItem("giocattoli");
    //controllo i dati
    if (jsonString === null) {
        lista.innerHTML = "<p>Nessun giocattolo salvato.</p>";
    } else {
        //trasformo Jason i array
        const giocattoli = JSON.parse(jsonString);
        //pulisco la lista prima di ricostruirla
        lista.innerHTML="";
        // faccio un ciclo for per l'array
        for(let i=0; i<giocattoli.length;i++){
            //prendo il gioccatolo corrente
            const giocattolo=giocattoli[i];
            //creo card
            const card=document.createElement("div");
            //aggiungo classe
            card.classList.add("card");
            // contenuto card
            const titolo = document.createElement("h2");
            titolo.textContent = giocattolo.nome;
            const categoria = document.createElement("p");
            categoria.textContent = "Categoria: " + giocattolo.categoria;
            const prezzo = document.createElement("p");
            prezzo.textContent = "Prezzo: €" + giocattolo.prezzo;
            const eta = document.createElement("p");
            eta.textContent = "Età: " + giocattolo.eta + " anni";
            const disponibile = document.createElement("p");
            disponibile.textContent = "Disponibile: " + giocattolo.disponibile;
            //aggiungo l'oggetto gioccatolo alla card
            card.appendChild(titolo);
            card.appendChild(categoria);
            card.appendChild(prezzo);
            card.appendChild(eta);
            card.appendChild(disponibile);
            // aggiungo card nella pagina
            lista.appendChild(card);
        }
    }
}

//cancello lista. questo l'ho chiesto all'ai
if (cancellaLista && lista) {
    cancellaLista.addEventListener("click", function () {
        //cancello dal localStorage
        localStorage.removeItem("giocattoli");
        // svuoto la lista
        lista.innerHTML = "<p>Lista eliminata.</p>";
    });
}
