const body=document.body;
const temaButton=document.getElementById("temaButton");

//controllo tema salvato
const temaSalvato=localStorage.getItem("tema");

if(temaSalvato=="dark"){
    body.classList.add("dark");
}

//cambio tema
temaButton.addEventListener("click", function(){
    body.classList.toggle("dark");
    //salvataggio stato tema
    if(body.classList.contains("dark")){
        localStorage.setItem("tema", "dark");
    }else{
        localStorage.setItem("tema", "light");
    }
});