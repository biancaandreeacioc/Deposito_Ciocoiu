//seleziono gli ementi da html
let titolo=document.getElementById("titolo");
let box=document.getElementById("box");
let btnAggiungi=document.getElementById("btnAggiungi");
let btnCambiaTitolo=document.getElementById("btnCambiaTitolo");
let btnElimina=document.getElementById("btnElimina");
let btnModificaStile=document.getElementById("btnModificaStile");
let lista=document.getElementById("lista");
let input=document.getElementById("inserimentoTesto");
let output=document.getElementById("output");

//leggo i valori dell'input
btnAggiungi.addEventListener("click", function(){
    // leggo l'input dell'utente
    let testo=input.value;
    //controllo che l'input non sia vuoto
    if(testo===""){
        output.textContent="Scrivi qualcosa";
    }else{
        //creo un nuovo elemento li
        let nuovoElemento=document.createElement("li");
        //inserisco il testo in li
        nuovoElemento.textContent=testo;
        //aggiungo l'elemento alla lista
        lista.appendChild(nuovoElemento);
        //svuoto l'input
        input.value="";
    }
});

// modifico il testo del titolo
btnCambiaTitolo.addEventListener("click", function(){
    //leggo il titolo dell'utente
    let nuovoTitolo=input.value;
    //controllo che l'input non sia vuoto
    if(nuovoTitolo===""){
        output.textContent="Scrivi qualcosa";
    }else{
        //sostituisce il titolo
        titolo.textContent=nuovoTitolo;
        //svuoto l'input
        input.value="";
    }

});
//elimino l'utlimo elemento della lista
btnElimina.addEventListener("click", function(){

    // se la lista non è vuota
    if(lista.lastElementChild){ //lastElementChild mi elimina l'ultimo elemento
        //rimuove l'ultimo elemento
        lista.lastElementChild.remove();
    }

});

//modifiche CSS
btnModificaStile.addEventListener("click", function(){
    //cambio il colore del titolo
    titolo.style.color="red";
    //cambio colore dello sfondo del div
    box.style.backgroundColor="lightblue";
    //autmento dimensione del testo
    box.style.fontSize="20px";
    //aggiungo bordo
    box.style.border="2px solid black";
});

//mi manca l'ultimo punto del nascondere o mostrare l'elemento