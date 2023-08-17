function Inicializacion(){
    const dataProductos  = {
        autores: [
            {id: 1, name:"Dylan"},
            {id: 2, name:"Gabo"},
            {id: 3, name:"Keyla"},
            {id: 4, name: "Luna"},
            {id: 5, name: "Reichel"}
        ],
        idiomas: [
            { id: 1, name: "Ingles" },
            { id: 2, name: "Español" },
            { id: 3, name: "Alemán" }
        ],
        generos:[
            {id:1,name:"Terror"},
            {id:2,name:"Romance"},
            {id:3,name:"Comedia"},
            {id:4,name:"Ficcion"}
        ],
        productos: []
    };

    if(!(localStorage.getItem("dataProductos")))
        localStorage.setItem("dataProductos", JSON.stringify(dataProductos));

    LlenarAutores();
    LlenarIdiomas();
    LlenarGeneros();
    LlenarProductos();
}

function LlenarAutores(){
    const dataProductos = localStorage.getItem("dataProductos");
    const autores = document.getElementById('autores')
    let objetos = JSON.parse(dataProductos);
    objetos.autores.forEach(autor => {
        autores.insertAdjacentHTML('beforeend','<option class="fs-5" value="'+ autor.id+'">'+autor.name+'</option>')
    });
}

function LlenarIdiomas(){
    const dataProductos = localStorage.getItem("dataProductos");
    const idiomas = document.getElementById('idiomas')
    let objetos = JSON.parse(dataProductos);
    objetos.idiomas.forEach(idioma => {
        idiomas.insertAdjacentHTML('beforeend','<option class="fs-5" value="'+ idioma.id+'">'+idioma.name+'</option>')
    });
}

function LlenarGeneros(){
    const dataProductos = localStorage.getItem("dataProductos");
    const generos = document.getElementById('generos')
    let objectos = JSON.parse(dataProductos);
    objectos.generos.forEach(genero => {
        generos.insertAdjacentHTML('beforeend',
        '<div class="d-flex align-items-center justify-content-center">' +
        '<input class="form-check-input" name="genero" type="checkbox" id="inlineCheckbox'+genero.id+'" value="option'+genero.id+'">'+
        '<label class="form-check-label mx-2 pt-2 font-custom-1 fs-5" for="inlineCheckbox'+genero.id+'">'+genero.name+'</label></div>')
    });
}

function LlenarProductos(){
    const dataProductos = localStorage.getItem("dataProductos");
    const productos = document.getElementById('productos')
    let objectos = JSON.parse(dataProductos);
    objectos.productos.forEach(producto => {
        let idiomaPr,autorPr;
        let generosPr = [];
        objectos.idiomas.forEach(idioma =>{if(producto.idioma == idioma.id)idiomaPr = idioma.name});
        objectos.autores.forEach(autor =>{if(producto.autor == autor.id)autorPr = autor.name});
        objectos.generos.forEach(genero =>{
            for(let i=0;i<producto.generos.length;i++){
                if(producto.generos[i] == genero.id)generosPr.push(' '+genero.name )
            }
        });
        productos.insertAdjacentHTML('beforeend',
        '<th scope="row">'+producto.id+'</th>' +
        '<td>'+producto.name+'</td>'+
        '<td>'+idiomaPr+'</td>'+ 
        '<td>'+autorPr+'</td>'+
        '<td>'+generosPr+'</td>')
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