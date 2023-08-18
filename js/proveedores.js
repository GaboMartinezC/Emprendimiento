function Inicializacion(){
    LlenarProveedores();
}
function LlenarProveedores(){
    const dataInventario = localStorage.getItem("dataInventario");
    const proveedores = document.getElementById('proveedores')
    let objectos = JSON.parse(dataInventario);
    objectos.proveedores.forEach(proveedor => {
        proveedores.insertAdjacentHTML('beforeend',
        '<th scope="row">'+proveedor.id+'</th>' +
        '<td>'+proveedor.name+'</td>' +
        '<td>'+proveedor.email+'</td>' +
        '<td>'+proveedor.telefono+'</td>' +
        '<td>'+proveedor.esEditorial+'</td>')
    });
}
const agregarBtn = document.getElementById('btnAgregar')
agregarBtn.addEventListener('click',()=>{
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email')
    const inputTelefono = document.getElementById('telefono')
    const inputEsEditorial = document.getElementById('esEditorial')
    const dataInventario = localStorage.getItem("dataInventario");
    let objectos = JSON.parse(dataInventario);
    objectos.proveedores.push({
        id:( objectos.proveedores.length+1),name:inputNombre.value,email:inputEmail.value, telefono:inputTelefono, esEditorial:inputEsEditorial
    });
    const datos = JSON.stringify(objectos);
    window.location.reload();
    localStorage.setItem("dataInventario",datos);
});
const limpiador = document.getElementById('limpiarTabla');
limpiador.addEventListener('click', ()=>{
    localStorage.removeItem("dataInventario");
    window.location.reload();
})