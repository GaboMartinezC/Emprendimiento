// Fetch API consumir datos desde un txt.

const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    const url = 'data/datos.txt'
    fetch(url) // URL
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status); // Estado
            console.log(respuesta.statusText); //estado en ingles
            console.log(respuesta.url); // URL a la que consultamos
            console.log(respuesta.type); // Tipo de consulta

            // Hay que decirle que método vamos a utilizar

            return respuesta.text();

        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}