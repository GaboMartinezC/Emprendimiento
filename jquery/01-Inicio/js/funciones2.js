//Nueva forma de programar con JQuery

let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#boton1");
  x.click(presionBoton);
}

function presionBoton() {
  console.log("Se presionó el botón con código JQuery");
}