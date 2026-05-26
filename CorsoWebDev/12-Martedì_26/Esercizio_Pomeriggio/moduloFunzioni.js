//importo il modulo fs
const fs = require("fs");

//creo funzione mostraMessaggio
function mostraMessaggio(req, res){
    //leggo il file .txt
    fs.readFile("messaggio.txt", (errore, dati)=>{
        //gestione errore
        if(errore){
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Errore file .txt");
            return;
        }

        //leggo il file html
        fs.readFile("index.html", (errore, dato)=>{
            //gestione errori
            if (errore) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("Errore file .html");
                return 
            }
            //stampo nel terminale
            console.log("File txt: " + dati);
            console.log("File html: " + dato);
            //invio le pagine al browser
            res.writeHead(200, { "Content-Type": "text/html" });

            res.end(dati + dato);
        });

    });
}

module.exports = {
    mostraMessaggio
};