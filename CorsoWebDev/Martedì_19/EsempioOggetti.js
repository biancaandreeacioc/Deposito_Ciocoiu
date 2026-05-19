//creazione oggetto
let persona={
    nome:"Mario",
    eta:30
};

//accesso proprietà
console.log(persona.nome); //Mario
console.log(persona["eta"]); //30

//modifica proprietà
persona.eta=31;

//aggiungi proprietà
persona.citta="Milano";

//rimozione proprietà
delete persona.citta;

//metodi utili
let chiavi=Object.keys(persona); //["nome", "eta"]
let valori=Object.values(persona); //["Mario, 31"]
let entries=Object.entries(persona); //["nome", "Mario"], ["eta, 31"]