function Inicializacion(){
    const dataProveedores  = {
        proveedores: [
            {id: 1, name:"FaberCastel"},
            {id: 2, name:"Santillana"},
            {id: 3, name:"Notebook"},
            {id: 4, name: "stabilo"}
        ],
        
        datosProducto: [],
        entradas: []
    };
    if(!(localStorage.getItem("dataProveedores")))
        localStorage.setItem("dataProveedores", JSON.stringify(dataProveedores));
    LlenarProveedores();
    LlenarDatosProducto();
}



function LlenarProveedores(){
    const dataProveedores = localStorage.getItem("dataProveedores");
    const proveedores = document.getElementById('proveedores')
    let objetos = JSON.parse(dataProveedores);
    objetos.proveedores.forEach(proveedor => {
        proveedores.insertAdjacentHTML('beforeend','<option class="fs-5" value="'+ proveedor.id+'">'+proveedor.name+'</option>')
    });
}


function LlenarDatosProducto(){
    const dataInventario = localStorage.getItem("dataInventario");
    const datosProducto = document.getElementById('datosProducto')
    let objectos = JSON.parse(dataInventario);
    objectos.datosProducto.forEach(dP => {
        datosProducto.insertAdjacentHTML('beforeend',
        '<th scope="row">'+dP.id+'</th>' +
        '<td>'+dP.name+'</td>' +
        '<td>'+dP.stockMinimo+'</td>' +
        '<td>'+dP.stockMaximo+'</td>' +
        '<td>'+dP.precio+'</td>' +
        '<td>'+dP.proveedor+'</td>'
        )
    });
}
const agregarBtn = document.getElementById('btnAgregar')
agregarBtn.addEventListener('click',()=>{
    const inputNombre = document.getElementById('nombre');
    const inputStockMinimo = document.getElementById('stockMinimo')
    const inputStockMaximo = document.getElementById('stockMaximo')
    const inputPrecio = document.getElementById('precio')
    const inputProveedor = document.getElementById('proveedor')
    const dataInventario = localStorage.getItem("dataInventario");
    let objectos = JSON.parse(dataInventario);
    objectos.datosProducto.push({
        id:( objectos.datosProducto.length+1),name:inputNombre.value,stockMinimo:inputStockMinimo.value, stockMaximo:inputStockMaximo.value,precio:inputPrecio.value, proveedor:inputProveedor.value
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