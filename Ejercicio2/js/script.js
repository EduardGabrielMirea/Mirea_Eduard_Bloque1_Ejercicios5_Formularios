document.addEventListener("DOMContentLoaded",function () {
    

    // Función para cambiar el color del párrafo
    function cambiarColor() {
        const parrafo = document.getElementById('parrafo');
        const colorSeleccionado = document.getElementById('colores').value;

        // Aplicar el color seleccionado
        if (colorSeleccionado === 'verde') {
            parrafo.style.color = 'green';
        } else if (colorSeleccionado === 'azul') {
            parrafo.style.color = 'blue';
        } else if (colorSeleccionado === 'rojo') {
            parrafo.style.color = 'red';
        }
    }
});