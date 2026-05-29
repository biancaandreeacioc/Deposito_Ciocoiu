// importo librerie
const express=require("express");
const mongoose = require("mongoose");

//creo server
const app = express();
const porta = 5000;

//middleware Json
app.use(express.json());

//conessione a mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/wishlist_db")
    .then(()=>{
        console.log("MongoDB collegato correttamente");
    })
    .catch((errore)=>{
        console.log("Errore connessione MongoDB");
    });

// creazione schema
//creo uno schema Mongoose per definire la struttura dei documenti del DB
const ArticoloSchema= new mongoose.Schema({
    //nome oggetto, stringa, obbligatorio
    nomeOggetto: {
        type: String,
        required: true
    },
    //prezzo, numero, obbligatorio
    prezzo: {
        type: Number,
        required: true
    },
    //comprato, opzionale, valore defoult false
    comprato: {
        type: Boolean,
        default: false
    }
});
//creazione modello operativo Articolo
const Articolo=mongoose.model("Articolo", ArticoloSchema);

//endpoint GET /api/articoli
//leggo tutti gli articoli dal DB
app.get("/api/articoli", async (req, res)=>{
    try{
        //cerco tutti i documenti con await e find
        const articoli=await Articolo.find();
        //restituisco risultato
        res.status(200).json(articoli);
    }catch(errore){
        //gestisco errore
        res.status(500).json({
            errore: "Errore nel recupero"
        });
    }
});

//end point di inserimento con POST /api/articoli
app.post("/api/articoli", async(req, res)=>{
    
});

//avvio server
app.listen(porta, () => {
    console.log("Server attivo sulla porta " + porta);
});
