//importo express
const express=require("express");

//creo app Express
const app=express();

//porta server
const PORT=5000;

//configurazione middleware per l'intercettazione e il parsing di JASON
app.use(express.json());

//creo array videogiochi
const videogiochi=[
    {
        id: 1,
        titolo: "FIFA",
        piattaforma: "PS5"
    },
    {
        id: 2,
        titolo: "Mario Kart",
        piattaforma: "Nintendo"
    },
    {
        id: 3,
        titolo: "GTA",
        piattaforma: "PS5"
    }
];

//endpoint con metodo GET /api/giochi (intero array)
app.get("/api/giochi", (req, res)=>{
    //restituisco lo stato
    res.status(200).json(videogiochi);
});

//endpoin con metodo get /api/giochi/:id
app.get("/api/giochi/:id", (req, res)=>{
    //prendo l'id dall'url e lo converto in numero
    const id=parseInt(req.params.id);
    
    //cerco il gioco con find()
    const giocoIndividuato =videogiochi.find(function(gioco){
        //se l'd del gioco corrente è uguale all'id cercato
        return gioco.id===id;
    });
    //se non lo trova
    if(giocoIndividuato===undefined){
        return res.status(404).json({
            errore: "Risorsa non individuata nel sistema"
        });
    }
    //se lo trova
    res.status(200).json(giocoIndividuato);

});

//avvio server
app.listen(PORT, () => {
    console.log("Server avviato sulla porta " + PORT);
});
