function fetchAndShowFile(fileName) {
    return fetch(fileName)
        .then(response => response.text())
        .catch(error => console.error('Error:', error));
}
Promise.all([
    fetchAndShowFile('productos.html'),
    fetchAndShowFile('home.html')
])
.then(contents => {
    document.getElementById('contenido').innerHTML = contents.join('');
});
