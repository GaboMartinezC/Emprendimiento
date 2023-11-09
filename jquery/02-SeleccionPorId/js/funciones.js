let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#parrafo1");
  x.click(presionParrafo1);
  x = $("#parrafo2");
  x.click(presionParrafo2);
}

function presionParrafo1() {
  let x = $("#parrafo1");
  x.css("color", "#ff0000");
  x.css("background-color", "#ffff00");
  x.css("font-family", "Courier");
}

function presionParrafo2() {
  let x = $("#parrafo2");
  x.css("color", "#ffff00");
  x.css("background-color", "#ff0000");
  x.css("font-family", "Arial");
}
