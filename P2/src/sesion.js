$("documento").ready(function () {
    fetch('./src/json/usuarios.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })  
});