let usuarios;
$(document).ready(function () {
    ConfigurarLocalStorage();
    $('#btnLogin').click(Login);
    
});
const Login = () => {
    let usuario = {
        email:  $('txtEmailLogin').val(),
        pass: $('txtPassLogin').val()
    }
    usuarios.forEach(u => {
        if (u.email === usuario.email)
        {
            if (u.pass === usuario.pass)
            {
                sessionStorage.setItem('sesion', JSON.stringify(usuario))
            
            }
            else
            {
                alert("no coinciden")
            }
        }
    });
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
            }
        ]
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}