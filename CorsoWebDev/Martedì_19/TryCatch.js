try{
    let risultato=10/0;
    console.log(risultato);
}catch(errore){
    console.log("errore");
}

//finally
try{
    console.log("Esecuzione...");
}catch(errore){
    console.log("errore");
}finally{
    console.log("operazione terminata");
}

//trow
function controllaEta(eta){
    if(eta<18){
        throw new Error("utente minorenne");
    }
    return "Accesso consentito";
}
try{
    console.log(controllaEta(16));
}catch(e){
    console.log(e.message);
}
