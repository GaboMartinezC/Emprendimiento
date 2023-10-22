function Inicializacion(){
    LlenarEmpleados();
}
function LlenarEmpleados(){
    const dataInventario = localStorage.getItem("dataInventario");
    const empleados = document.getElementById('empleados')
    let objectos = JSON.parse(dataInventario);
    objectos.empleados.forEach(empleados => {
        empleados.insertAdjacentHTML('beforeend',
        '<th scope="row">'+empleados.id+'</th>' +
        '<td>'+empleados.name+'</td>' +
        '<td>'+empleados.cedula+'</td>' +
        '<td>'+empleados.telefono+'</td>'+
        '<td>'+empleados.email+'</td>' +
        '<td>'+empleados.puesto+'</td>'
        )
    });
}
const agregarBtn = document.getElementById('btnAgregar')
agregarBtn.addEventListener('click',()=>{
    const inputNombre = document.getElementById('nombre');
    const inputCedula = document.getElementById('cedula');
    const inputTelefono = document.getElementById('telefono');
    const inputEmail = document.getElementById('email');
    const inputPuesto = document.getElementById('puesto');
    const dataInventario = localStorage.getItem("dataInventario");
    let objectos = JSON.parse(dataInventario);
    objectos.empleados.push({
        id:( objectos.empleados.length+1),name:inputNombre.value,cedula:inputCedula.value, telefono:inputTelefono.value, email:inputEmail.value, puesto:inputPuesto.value
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