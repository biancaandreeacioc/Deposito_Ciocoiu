//seleziono elementi dom
let bottone=document.getElementById("btnCarica");
let output=document.getElementById("output");

//funzione che simula caricamento
//mi sono aiutata con la slide
function carica(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //se va a buon fine, dopo due secondi dammi il nome, il ruolo e lo stato dell'utente
            resolve({
                nome: "nome utente",
                ruolo: "ruolo svolto",
                stato: "stato utente"
            });
        },2000);

    });
}

// funzione async/await
//mi sono aiutata con la slide
async function utente() {
    //messaggio di caricamento in corso
    output.textContent="Caricamento in corso...";

    try{
        //aggiungo la classe caricamento
        //ho chiesto all'ai come si aggiungeva perchè non mi ricordavo
        output.classList.add("caricamento");

        //aspetto il caricamento da parte di promise
        let utente=await carica();

        //mostro dati utente
        output.textContent="Nome: " + utente.nome;
        
        //questo non funziona :( non mi cambia lo stile e non riesco a capire il perchè
        //rimuovo classe caricamento
        output.classList.remove("caricamento");
        //aggiungo classe successo
        output.classList.add("successo");

    }catch(error){
        //messaggio di errore
        output.textContent="Errore nel caricamento";

    }
    
}


//quando clicco bottone carica
bottone.addEventListener("click", utente);