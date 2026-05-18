//switch con breack

let giorno=2;

switch(giorno){
    case 1:
        console.log("lunedì");
        break;
    case 2:
        console.log("martedì");
        break;
    case 3:
        console.log("mercoledì");
        break;
    default:
        console.log("giorno non valido");
}

let x="5";

switch(x){
    case 5:
        console.log("numero");
        break;

    case "5":
        console.log("stringa");
        break;
}

let valore=2;

switch(valore){
    case 1:
        console.log("uno");
    case 2:
        console.log("due");
    case 3:
        console.log("tre");
        break;
}

let giorni=6;

switch(giorni){
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("giorno lavoratico");
}