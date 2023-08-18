const InicializarVistaEntradas = () => {
    //Inicializa combobox de sucursales
    const dataInventario = localStorage.getItem("dataInventario");
    const sucursales = document.getElementById('sucursalesVistaEntradas')
    let objetos = JSON.parse(dataInventario);
    objetos.sucursales.forEach(sucursal => {
        sucursales.insertAdjacentHTML('beforeend','<option class="fs-5" value="'+ sucursal.id+'">'+sucursal.name+'</option>')
    });
    //Inicializa combobox de productos
    const dataProductos = localStorage.getItem('dataProductos');
    const productos = document.getElementById('listadoProductos');
    objetos = JSON.parse(dataProductos);
    objetos.productos.forEach(producto => {
        productos.insertAdjacentHTML('beforeend', `<option class="fs-5" value="${producto.id}">${producto.name}</option>`)
    });
}
const GuardarEntrada = () => {

}
const MostrarOpuesto = (mod1, mod2) => {
    document.getElementById(mod1).style.display = "none";
    document.getElementById(mod2).style.display = "block";
}