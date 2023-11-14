$(document).ready(function () {
  RenderizarInformacion();
  RenderizarProductos();
  $('#cerrarSesion').click();
});
const RenderizarInformacion = () => {
  let usuario = JSON.parse(sessionStorage.getItem('sesion'));
  if (usuario.admin)
  	$('#menuDrop').prepend(`<li onclick="window.location.replace('admin.html')"><a class="dropdown-item" href="#">Admin</a></li>`)
  $('#nombreUsuario').text('¡Hola '+usuario.nombre+'!');
  $('#dropdownNombreUsuario').text(usuario.nombre);
}
const RenderizarProductos = () =>  {
  let  productos = JSON.parse(localStorage.getItem('productos'));
  let html = ``;
  for (let i = 0; i < productos.length; i++)
  {
	html += `
		<div class="col-6 col-md-4 d-flex p-1">
			<div class="card" style="width: 18rem;">
				<img src="${productos[i].urlImagen}" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${productos[i].descripcion}</h5>
					<p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, nam alias. Quas, consectetur dolores.</p>
					<select class='form-control m-1' id='selectN${productos[i].id}'>
                        <option selected value="EUR">EUR</option>
                        <option selected value="USD">USD</option>
                        <option selected value="CRC">CRC</option>
                    </select>
					<button onclick="VerPrecio('selectN${productos[i].id}', '${productos[i].precio}');" class="btn btn-primary text-center" style="color: black;">Ver Precio <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
				</div>
			</div>
		</div>
	`;
  }
  $('#listadoProductos').append(html);
}
const VerPrecio = (idSelect, precio) => {
	let valor = $('#'+idSelect);
	if (valor.val() === 'EUR')
		swal("Precio", precio + 'EUR', "success");
	else
	{
		console.log(ConvertirMoneda('CRC',precio));
	}
}
const CerrarSesion = () => {
    sessionStorage.setItem('sesion', 'null')
    window.location.replace('index.html')
}
const ConvertirMoneda = (divisa, precio) =>  {
  url = 'http://data.fixer.io/api/latest?access_key=51cbda393583cb25cd1f5621698311c2';
  fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('No se pudo obtener la información.');
    }
  })
  .then(data => {
    console.log(data);
	if (divisa == 'CRC')
		return precio * data.rates.CRC;
	else
		return precio * data.rates.USD;
  })
  .catch(error => {
    console.error(error);
  });
}