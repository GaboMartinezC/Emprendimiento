//Datos Iniciales
let usuarios;
let productos;
let activo = "opcionProductos";
//Evento inicialización
$("document").ready(function () {
     //Datos del LocalStorage / SessionStorage
    if (localStorage.getItem('productos'))
        productos = JSON.parse(localStorage.getItem('productos'));
    else
        productos = [];
    if (sessionStorage.getItem('sesion'))
        window.location.replace('index.html');
    //RenderizarProductos();
});
//Funciones
///Escribe en local storage, método genérico
const Escribir = (item, valor) =>
{
    localStorage.setItem(item,valor);
}
const RenderizarProductos = () => {
    let htmlInterno = "";
    if (localStorage.getItem('productos'))
    {
        productos.forEach(p => function(){
            htmlInterno += `<div class="card col-6" style="width: 18rem;">
                        <img class="card-img-top" src=" ${p.urlImagen}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">${p.descripcion}</h5>
                        <p class="card-text">${p.descripcionLarga}</p>
                        <button href="#" class="btn btn-danger" onclick=EliminarProducto('${p.id}')>Eliminar</button>
                        </div>
                    </div>`;
             
        });
    }
    else
    {
        $('#listadoProductos').addClass("text-center")
        htmlInterno = `<h5>No hay productos registrados</h5>`;
    }
    $('#listadoProductos').html(htmlInterno);
}
const LimpiarFormProductos = () => {
    $('#txtDescripcion').val('');
    $('#txtDescripcionLarga').val('');
    $('#txtDescripcionLarga').val('');
    $('#txtUrlImagen').val('');
}
const IngresarProducto = () => {
    //Declaración de objeto producto
    let bandera = true;
    let producto = {
        id: productos.length,
        descripcion: $('#txtDescripcion').val(),
        descripcionLarga: $('#txtDescripcionLarga').val(),
        precio: $('#txtDescripcionLarga').val(),
        urlImagen: $('#txtUrlImagen').val()
    };
    let arregloProd = Object.values(producto);
    arregloProd.forEach(val =>{
        if (val === "" || val === null)
            bandera = false;
    })
    if (bandera)
    {
        //Escritura en el arreglo
        productos.push(producto);
        //Escritura en local storage
        let datos = JSON.stringify(productos);
        Escribir('productos', datos);
        LimpiarFormProductos();
    }
    else
        alert("");
}
///Método de navegación
const CambioVentana = (nuevaOpcion) =>{
    if (nuevaOpcion != activo)
    {
        $('#'+nuevaOpcion).css('display','flex');
        $('#'+activo).css('display','none');
        activo = nuevaOpcion;
    }
}