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

    LlenarInventarios();
}
function LlenarSucursales(){
    const dataProductos = localStorage.getItem("dataInventario");
    const sucursales = document.getElementById('sucursales')
    let objetos = JSON.parse(dataProductos);
    objetos.sucursales.forEach(sucursal => {
        sucursales.insertAdjacentHTML('beforeend','<option class="fs-5" value="'+ sucursal.id+'">'+sucursal.name+'</option>')
    });
}
function LlenarInventarios(){
    const dataProductos = localStorage.getItem("dataInventario");
    const productos = document.getElementById('productos')
    let objectos = JSON.parse(dataInventario);
    objectos.inventarios.forEach(inventario => {
        let sucursalIn, sucursalUbiIn;
        objectos.sucursales.forEach(idioma =>{if(sucursal.idioma == sucursal.id)sucursalIn = sucursal.name});
        productos.insertAdjacentHTML('beforeend',
        '<th scope="row">'+inventario.id+'</th>' +
        '<td>'+inventario.name+'</td>'+
        '<td>'+idiomaPr+'</td>')
    });
}

const agregarBtn = document.getElementById('btnAgregar')
agregarBtn.addEventListener('click',()=>{
    const dataProductos = localStorage.getItem("dataProductos");
    let objectos = JSON.parse(dataProductos);
    const nombreInput = document.getElementById('nombre');
    const autoresInput = document.getElementById('autores');
    const idiomasInput = document.getElementById('idiomas');
    let checkboxes= document.querySelectorAll('input[name="genero"]:checked');
    let output= [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    objectos.productos.push({
        id:( objectos.productos.length + 1),name:nombreInput.value,
        autor:autoresInput.options[autoresInput.selectedIndex].value,
        idioma: idiomasInput.options[idiomasInput.selectedIndex].value,
        generos: 1
    });
    const datos = JSON.stringify(objectos);
    window.location.reload();
    localStorage.setItem("dataProductos",datos);
});

const limpiador = document.getElementById('limpiarTabla');
limpiador.addEventListener('click', ()=>{
    localStorage.removeItem("productos");
    window.location.reload();
})