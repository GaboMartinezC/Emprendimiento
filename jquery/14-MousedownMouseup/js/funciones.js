let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("td");
  x.mousedown(presionaMouse);
  x.mouseup(sueltaMouse);
}

function presionaMouse() {
  $(this).css("background-color", "#ff0");
  $(this).css("color", "#000");
}

function sueltaMouse() {
  $(this).css("background-color", "#fff");
}