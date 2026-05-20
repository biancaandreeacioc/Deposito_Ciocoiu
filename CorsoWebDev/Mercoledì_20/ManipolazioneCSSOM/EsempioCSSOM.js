let bottone=document.getElementById("btn");
let testo=document.getElementById("testo");

bottone.addEventListener("click", function(){
    //aggiunge o rimuove la classe CSS
    testo.classList.toggle("evidenziato");
});

