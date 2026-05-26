//importo i moduli
const http = require("http");
const fs = require("fs");
const prompt = require("prompt-sync")();

//chiedo all'utente di scegliere quale inviare
let scelta=prompt("Fai la tua scelta: a, b o c ");


//creo il server
const server=http.createServer((req, res)=>{

    //questo l'ho chiesto all'ai perchè non mi prendeba il file calcolatrice.js che avevo creato a parte
    //se l'url richiesto dal browser è calcolatrice.js
       if (req.url == "/calcolatrice.js") {
        //apro il file e leggo il contenuto
        fs.readFile("calcolatrice.js", (errore, dati) => {
            //gestisco errore
            if (errore) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Errore file JS");
            }
            //altrimenti gli mando il file corretto JS
            res.writeHead(200, {
                "Content-Type": "application/javascript"
            });
            // invio il contenuto del file al browser
            res.end(dati);
        });

        return;
    }


    //se la scelta è a aprimi la pagina home
    if(scelta=="a"){
        fs.readFile("home.html", (errore, dati)=>{
            //gestisco errori
            if(errore){
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Errore file Home");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(dati);
        });
    }
    //se la scelta è b apri info creatore
    else if(scelta=="b"){
        fs.readFile("info.html", (errore, dati) => {
            //gestisco errori
            if(errore){
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Errore file Info");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(dati);
        });
    }
    //se la scelta è c apri la calcolatrice
    else if(scelta == "c"){
        fs.readFile("calcolatrice.html", (errore, dati) => {
            //gestisco errori
            if(errore){
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Errore file Calcolatrice");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(dati);
        });
    }
    
});

// Avvio server
server.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
});