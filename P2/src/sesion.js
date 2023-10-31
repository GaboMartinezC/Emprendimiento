const EscribirSesion = (usuario) => {
    sessionStorage.setItem('sesion', usuario);
}
const EscribirUsuarios = (usuarios) => {
    localStorage.setItem('usuarios', usuarios);
}
const Usuarios = () => {
    if (localStorage.getItem('usuarios'))
        return JSON.parse(localStorage.getItem('usuarios'));
}
const Registro = () => {
    let usuarios = Usuarios();
    usuarios.forEach(u => {
        if(u.email === $('txtEmail').val())
            return false;
    });
    if ($('txtPass').val() != $('txtConfirmarPass').val())
    {
        return false;
    }
    let usuarioRegistrar = {
        nombre: $('txtNombre').val(),
        apellido: $('txtApellido').val(),
        email: $('txtEmail').val(),
        pass: $('txtPass').val(), 
        admin: false
    }
    usuarios.push(usuarioRegistrar);
    EscribirUsuarios(JSON.stringify(usuarioRegistrar));
}
const Ingreso = () => {
    let usuario = {
        email:  $('txtEmailLogin').val(),
        pass: $('txtPassLogin').val()
    }
    let usuarios = Usuarios();
    console.log(usuarios);
    console.log(usuario);
    usuarios.forEach(u => {
        if (u.email === usuario.email)
        {
            if (u.pass === usuario.pass)
            {
                EscribirSesion(JSON.stringify(u));
            }
            else
            {
                alert("no coinciden")
            }
        }
    });
    alert("no hay datos")
}
const CerrarSesion = () => {
    sessionStorage('sesion', 'null');
    window.location.replace('index.html')
}