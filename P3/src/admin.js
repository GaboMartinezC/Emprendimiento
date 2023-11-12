//Datos Iniciales
let usuarios;
let productos;
let activo = "opcionProductos";
$(document).ready(function () {
    ConfigurarLocalStorage();
    
    $('#btnIngresarProducto').click(GuardarProducto);
    //$('#btnIngresarUsuario').click(GuardarUsuario);

    $('.btnLimpiar').click(function() {
        $('input').val('');
    })
    
});
//Metodos de Producto
//Guardar producto
const GuardarProducto = () => {
    //Declaración de objeto producto
    let bandera = true;
    let producto = {
        id: productos.length + 1,
        descripcion: $('#txtDescripcion').val(),
        descripcionLarga: $('#txtDescripcionLarga').val(),
        precio: $('#txtDescripcionLarga').val(),
        urlImagen: $('#txtUrlImagen').val()
    };
    //Valida los datos completos
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
        localStorage.setItem('productos', datos);
        $('input').val('');
        swal("Ingreso Correcto", "", "success");
    }
    else
        swal("Ha ocurrido un problema", "Datos Incorrectos", "success");
    window.location.reload();
}
const EliminarProducto = (id) => {
    for (let i = 0; i < 10; i++)
    {
        if (productos[i].id === id)
        {
            console.log(productos[i]);
        }
    }
    window.location.reload();
}

//Metodos de Usuario
const GuardarUsuario = () => {
    let bandera = true;
    let contra = $('#txtConfirmarContra').val(); 
    let usuario = {
        id: usuarios.length + 1,
        nombre: $('#txtNombre').val(),
        apellido: $('#txtApellido').val(),
        email: $('#txtEmail').val(),
        contra: $('#txtContra').val(),
        admin: false
    };
    if ($('#chkAdmin').is(':checked'))
        usuario.admin = true;
    if (usuario.contra != contra)
        bandera = false;
    if (bandera)
    {
        usuarios.push(usuario)
        datos = JSON.stringify(usuarios);
        localStorage.setItem('usuarios', datos);
        swal("Ingreso Correcto", "", "success");
    }
    else
    {
        swal("Ingreso Incorrecto", "Verifique los datos", "success");
    }
}

//Metodos de configuracion
const ConfigurarLocalStorage = ()  => {
    //Datos del LocalStorage / SessionStorage
    if (localStorage.getItem('productos'))
    {
        productos = JSON.parse(localStorage.getItem('productos'));
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
    else
    {
        //producto de ejemplo
        productos = [
            {
                id: 1,
                descripcion: 'producto',
                descripcionLarga: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta quas dolorum magnam aperiam quasi sint',
                precio: 100,
                urlImagen: ''
            } 
        ];
        usuarios = [
            {
                id: 1,
                nombre: "gabo",
                apellido: "martinez",
                email: "martinezcgabriel42@gmail.com",
                pass: "123",
                admin : true
            }
        ]
        localStorage.setItem('productos', JSON.stringify(productos));
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

    }
    //CAMBIAR A NOT
    if (sessionStorage.getItem('sesion'))
        window.location.replace('index.html');
    else
    {
        //usuario = JSON.parse(sessionStorage.getItem('sesion'));
        $('#dropdownNombreUsuario').html('');
    }

}
///Método de navegación
const CambioVentana = (nuevaOpcion) =>{
    if (nuevaOpcion != activo)
    {
        $('#'+nuevaOpcion).css('display','flex');
        $('#'+activo).css('display','none');
        activo = nuevaOpcion;
        if (nuevaOpcion == 'opcionProductos')
            RenderizarProductos();
        else
            $('#listadoProductos').html('')
    }
}
const CerrarSesion = () => {
    sessionStorage('sesion', 'null');
    window.location.replace('index.html')
}