function Inicializacion(){
    const dataInventario  = {
        inventarios: [
            {id: 1,name: "Inventario Heredia",sucursal: 1, 
            productos: [
                {id: 1, cantidad: 20},
                {id: 2, cantidad: 15}
            ]},
            {id:2,name: "Inventario Cartago", sucursal:2,
            productos:[
                {id:2, cantidad:30},
                {id:3, cantidad: 10}
            ]}
        ],
        sucursales: [
            {id: 1,name:"Sucursal Heredia",ubicacion:"Heredia"},
            {id: 2,name:"Sucursal Cartago",ubicacion:"Cartago"}
        ]
    };

    if(!(localStorage.getItem("dataInventario")))
        localStorage.setItem("dataInventario", JSON.stringify(dataInventario));
    LlenarSucursales();
    LlenarInventarios();
    InicializarVistaEntradas();
}
function LlenarSucursales(){
    const dataInventario = localStorage.getItem("dataInventario");
    const sucursales = document.getElementById('sucursales')
    let objetos = JSON.parse(dataInventario);
    objetos.sucursales.forEach(sucursal => {
        sucursales.insertAdjacentHTML('beforeend','<option class="fs-5" value="'+ sucursal.id+'">'+sucursal.name+'</option>')
    });
}
function LlenarInventarios(){
    const dataInventario = localStorage.getItem("dataInventario");
    const productos = document.getElementById('productos')
    let objectos = JSON.parse(dataInventario);
    objectos.inventarios.forEach(inventario => {
        let sucursalIn;
        objectos.sucursales.forEach(sucursal =>{if(inventario.sucursal == sucursal.id)sucursalIn = sucursal.name});
        productos.insertAdjacentHTML('beforeend',
        '<th scope="row">'+inventario.id+'</th>' +
        '<td>'+inventario.name+'</td>'+
        '<td>'+sucursalIn+'</td>')
    });
}

const agregarBtn = document.getElementById('btnAgregar')
agregarBtn.addEventListener('click',()=>{
    const dataInventario = localStorage.getItem("dataInventario");
    let objectos = JSON.parse(dataInventario);
    const nombreInput = document.getElementById('nombre');
    const sucursalInput = document.getElementById('sucursales');
    objectos.inventarios.push({
        id:( objectos.inventarios.length + 1),name:nombreInput.value,
        sucursal:sucursalInput.options[sucursalInput.selectedIndex].value
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