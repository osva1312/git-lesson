let totale_gatti = 40;
let gatti_in_fila = 5;
 
let file_resultanti = Math.floor(totale_gatti / gatti_in_fila);
let gatti_avanzati = totale_gatti % gatti_in_fila;

let gatti_mancanti = gatti_avanzati === 0;
 
console.log("Ci sono 8 file di gatti e ne mancano 0 per una nuova fila, con un avanzo di 0");