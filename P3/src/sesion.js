let usuarios;
$(document).ready(function () {
    ConfigurarLocalStorage();
    $('#btnLogin').click(Login);
    $('#btnRegistro').click(Registro);
});
const Registro = () => {
    usuarios = localStorage.getItem('usuario');
    let contra = $('#txtConfirmarContra').val(); 
    let usuario = {
        id: usuarios[usuarios.length - 1].id + 1,
        nombre: $('#txtNombre').val(),
        apellido: $('#txtApellido').val(),
        email: $('#txtEmail').val(),
        contra: $('#txtContra').val(),
        admin: false
    };
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
const Login = () => {
    let bandera = false;
    let usuario = {
        email:  $('#txtEmailLogin').val(),
        pass: $('#txtPassLogin').val()
    }
    for (let i = 0; i < usuarios.length; i++)
    {
        if (usuarios[i].email == usuario.email)
        {
            if (usuarios[i].pass == usuario.pass)
            {
                sessionStorage.setItem('sesion', JSON.stringify(usuarios[i]))
                if (usuarios[i].admin)
                    window.location.replace('admin.html');
                else
                    window.location.replace('productos.html');                
            }
            else
            {
                alert("Contraseñas no coinciden")
            }
            bandera = true;
        }
    }
    if  (!bandera)
        alert("Usuario no encontrado")
}
const ConfigurarLocalStorage = () => {
    if (localStorage.getItem('usuarios'))
    {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
    else
    {
        usuarios = [
            {
                id: 1,
                nombre: "gabo",
                apellido: "martinez",
                email: "martinezcgabriel42@gmail.com",
                pass: "123",
                admin : true
            },
            {
                id: 2,
                nombre: "gabriel",
                apellido: "martinez",
                email: "martinezcgabriel24@gmail.com",
                pass: "123",
                admin : false
            }
        ]
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}