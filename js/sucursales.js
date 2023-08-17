function LlenarSucursales(){
    const dataInventario = localStorage.getItem("dataInventario");
    const sucursales = document.getElementById('sucursales')
    let objectos = JSON.parse(dataInventario);
    objectos.sucursales.forEach(sucursal => {
        sucursales.insertAdjacentHTML('beforeend',
        '<th scope="row">'+sucursal.id+'</th>' +
        '<td>'+sucursal.name+'</td>'+
        '<td>' +sucursal.ubicacion+'</td>')
    });
}
const agregarBtn = document.getElementById('btnAgregar')
agregarBtn.addEventListener('click',()=>{
    const inputNombre = document.getElementById('nombre');
    const inputUbicacion = document.getElementById('ubicacion')
    const dataInventario = localStorage.getItem("dataInventario");
    let objectos = JSON.parse(dataInventario);
    objectos.sucursales.push({
        id:( sucursales.productos.length + 1),name:inputNombre.value,ubicacion:inputUbicacion
    });
    const datos = JSON.stringify(objectos);
    window.location.reload();
    localStorage.setItem("dataInventario",datos);
});
const limpiador = document.getElementById('limpiarTabla');
limpiador.addEventListener('click', ()=>{
    localStorage.removeItem("sucursales");
    Inicializacion();
    window.location.reload();
})