let modulos = ['prodHTML', 'homeHTML'];
let opciones = ['productos','home'];
const AbrirModulo = (idParam, idOpcion) => {
    let claseInactiva = 'nav-link text-dark d-flex align-items-center justify-content-start'
    document.getElementById(idParam).style.display = "block";
    document.getElementById(idOpcion).className = claseInactiva + ' active';
    for(let i = 0; i < 1; i++)
    {
        if (modulos[i]!=idParam)
            document.getElementById(modulos[i]).style.display = "none";    
    }
    for(let i = 0; i < 2; i++)
    {
        if (opciones[i] != idOpcion)
            document.getElementById(opciones[i]).className = 'nav-link text-dark d-flex align-items-center justify-content-start ';
    }
}
const CerrarElemento = (idParam) => {
    document.getElementById(idParam).style.display = "none";
}