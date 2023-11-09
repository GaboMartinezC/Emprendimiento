addEventListener('DOMContentLoaded', inicializarEventos); 
function inicializarEventos() { 
    let boton1 = document.getElementById('boton1'); 
boton1.addEventListener('click', presionBoton); } 

function presionBoton(e) { 
    console.log('se presionó el botón con código javascript'); }