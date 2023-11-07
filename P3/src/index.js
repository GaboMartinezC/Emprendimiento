let activo = "opcionProductos";
///Método de navegación
const CambioVentana = (nuevaOpcion) =>{
    if (nuevaOpcion != activo)
    {
        $('#'+nuevaOpcion).css('display','flex');
        $('#'+activo).css('display','none');
        activo = nuevaOpcion;
    }
}