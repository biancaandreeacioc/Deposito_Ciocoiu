// Importa il modulo HTTP integrato di Node.js
const http = require("http");
const moduloMessaggio = require("./moduloFunzioni");

// Crea il server
const server = http.createServer((req, res) => {

    moduloMessaggio.mostraMessaggio(req, res);
});

// Avvia il server sulla porta 3000
server.listen(3000, () => {
console.log("Server avviato su http://localhost:3000");
});