let x=$(document);
x.ready(inicializarEventoO);
x.ready(inicializarEventoM);

function inicializarEventoO()
{
  let x=$("#botonO1");
  x.click(ocultarItem);
}

function inicializarEventoM()
{
  let x=$("#botonM1");
  x.click(mostrarItem);
}

function ocultarItem()
{
  let x=$("#lista1 li");
  x.hide();
}

function mostrarItem()
{
  let x=$("#lista1 li");
  x.show();
}