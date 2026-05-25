// seleziono elementi
const formGiocatore = document.getElementById("formGiocatore");
const nome = document.getElementById("nome");
const gioco = document.getElementById("gioco");
const piattaforma = document.getElementById("piattaforma");
const eliminaButton = document.getElementById("eliminaButton");
const temaButton = document.getElementById("temaButton");
const informazioni = document.getElementById("informazioni");
const body = document.body;

//mi serve per mostrarre l'utente
const profiloUtente = document.getElementById("profiloUtente");

//form dati
//mi dava errore e ho chiesto all'ai e mi ha detto di fare il controtto sull'esistenza
if (formGiocatore) {
formGiocatore.addEventListener("submit", function (event) {
    // blocco refresh
    event.preventDefault();
    // recupero valori input
    const nomeGiocatore = nome.value;
    const giocoPreferito = gioco.value;
    const piattaformaPreferita = piattaforma.value;
    // salvo dati
    localStorage.setItem("nome", nomeGiocatore);
    localStorage.setItem("gioco", giocoPreferito);
    localStorage.setItem("piattaforma", piattaformaPreferita);
    // messaggio
    informazioni.innerText ="Dati salvati. Vai nella tua Area Personale per vedere il profilo.";
    // reset form
    formGiocatore.reset();
    // elimina messaggio dopo 2 secondi. questo l'ho chiesto all'ai
    setTimeout(function () {
        informazioni.innerText = "";
    }, 2000);

});
}

//mostro dati utente
function aggiornaProfilo() {
    //prendi i dati
    const nomeSalvato = localStorage.getItem("nome");
    const giocoSalvato = localStorage.getItem("gioco");
    const piattaformaSalvata = localStorage.getItem("piattaforma");
    //se esistono tutti e 3 i dati,
    // prendili e scrivili nella pagina html
    if (nomeSalvato && giocoSalvato && piattaformaSalvata) {
        profiloUtente.innerHTML = `
            <p><strong>Nome:</strong> ${nomeSalvato}</p>
            <p><strong>Gioco:</strong> ${giocoSalvato}</p>
            <p><strong>Piattaforma:</strong> ${piattaformaSalvata}</p>
        `;

    } else {
        profiloUtente.innerHTML = "Nessun dato salvato.";
    }
}
//controlla se sei nella pagina profilo e se sì, esegui la funzione
//questo l'ho chiesto all'ai perchè mi dava errore e non sapevo come fare
if (profiloUtente) {
    aggiornaProfilo();
}

//elimino dati
if(eliminaButton){
eliminaButton.addEventListener("click", function () {
    localStorage.removeItem("nome");
    localStorage.removeItem("gioco");
    localStorage.removeItem("piattaforma");

    aggiornaProfilo();

});
}

//cambio tema
const temaSalvato = localStorage.getItem("tema");

if (temaSalvato === "dark") {
    body.classList.add("dark-mode");
}
if(temaButton){
temaButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }

});
}






