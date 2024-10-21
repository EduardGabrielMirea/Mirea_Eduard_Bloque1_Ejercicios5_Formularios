// Función que se ejecuta cuando la página carga para enfocar en el campo de nombre
window.onload = function() {
    document.getElementById("nombre").focus();
};

// Función para manejar el evento onchange de la lista de aficiones
function mostrarInfoAficion() {
    var lista = document.getElementById("aficiones");
    var indiceSeleccionado = lista.selectedIndex;
    var valorSeleccionado = lista.options[indiceSeleccionado].value;
    var longitudLista = lista.length;

    alert("La longitud de la lista es " + longitudLista +
        "\nEl índice seleccionado es el " + indiceSeleccionado +
        "\nEl valor del índice seleccionado es " + valorSeleccionado);
}

// Validación del formulario antes de enviar
function validarFormulario() {
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;

    // Validación del DNI
    if (dni.trim() === "") {
        alert("El campo DNI es obligatorio.");
        return false;
    }

    // Validación del teléfono (9 dígitos consecutivos)
    var regexTelefono = /^[0-9]{9}$/;
    if (!regexTelefono.test(telefono)) {
        alert("El número de teléfono debe tener 9 dígitos consecutivos.");
        return false;
    }

    // Si todo está correcto
    return true;
}