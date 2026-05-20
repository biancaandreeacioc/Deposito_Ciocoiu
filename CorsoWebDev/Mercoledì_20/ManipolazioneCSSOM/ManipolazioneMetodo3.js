//seleziono elementi html
let box=document.getElementById("box");

let btnBordo=document.getElementById("btnBordo");

let btnRotazione=document.getElementById("btnRotazione");

let btnNascondi=document.getElementById("btnNascondi");

btnBordo.addEventListener("click", function(){
    //cambio spessore
    box.style.border=""
});

btnRotazione.addEventListener("click", function(){
    box.style.transform="rotate(20deg)";

});

btnNascondi.addEventListener("click", function(){
    box.style.visibility="hidden";
});