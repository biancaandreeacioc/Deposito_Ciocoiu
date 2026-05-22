// seleziono elementi
const form = document.getElementById("formContatti");
const risposta = document.getElementById("risposta");

// submit form
form.addEventListener("submit", function(event){
    // blocco refresh
    event.preventDefault();
    // recupero valori
    const email = document.getElementById("email").value;
    const messaggio = document.getElementById("messaggio").value;
    // messaggio di successo
    risposta.textContent = "Messaggio inviato";

    // reset form
    form.reset();

});