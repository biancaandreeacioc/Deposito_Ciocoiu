// seleziono gli elementi del dom
let input=document.getElementById("testo");
let bottone=document.getElementById("bottone");
let svuota=document.getElementById("svuota");
let lista=document.getElementById("lista");
let output=document.getElementById("output");

//vado a leggere gli elementi dell'input
// quando il bottone viene cliccato esegue la funzione
bottone.addEventListener("click", function(){

    let testo=input.value; //legge l'input dell'utente

    //controllo che l'input non sia vuoto
    if(testo===""){
        output.textContent="Scrivi qualcosa";
    }else{
        //creo la lista
        let nuovoElemento=document.createElement("li");
        //inserisco il testo nella lista
        nuovoElemento.textContent=testo;

        // creo il bottone elimina
        let bottoneElimina=document.createElement("button");
        bottoneElimina.textContent="Elimina";

        //definisco l'evento per il bottone elimina
        bottoneElimina.addEventListener("click", function(){
            nuovoElemento.remove(); //rimuove un elemento
        });
        //aggiungo il bottone alla lista
        nuovoElemento.appendChild(bottoneElimina);

        //aggiungo il nuovo elemento nella lista
        lista.appendChild(nuovoElemento);
        //svuoto input
        input.value="";
        output.textContent="Hai aggiunto " + testo;
    }

});

//svuoto la lista
svuota.addEventListener("click", function(){
    //svuoto completamente con innerHTML mettendo la stringa vuota
    lista.innerHTML=""; //in questo modo elimino tutto il contenuto
    output.textContent="Lista eliminata";
});