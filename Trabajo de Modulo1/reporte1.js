let libros = [];

// ARRAY DONDE SE GUARDAN LOS DATOS


if (localStorage.getItem("libros")) {
    libros = JSON.parse(localStorage.getItem("libros"));
} 

mostrar();


// FUNCIÓN MOSTRAR (READ)
function mostrar() {

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    // ESTRUCTURA REPETITIVA
    for (let contador_indices = 0; contador_indices < libros.length; contador_indices++) {

        tabla.innerHTML += `
            <tr>
                <td>${libros[contador_indices].genero}</td>
                <td>${libros[contador_indices].nombre}</td>
                <td>${libros[contador_indices].autor}</td>
                <td>${libros[contador_indices].fecha}</td>
            </tr>
        `;
    }
}
