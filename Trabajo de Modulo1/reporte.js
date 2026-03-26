let personas = [];

if (localStorage.getItem("personas")) {
    personas = JSON.parse(localStorage.getItem("personas"));
} 

mostrar();

function mostrar() {

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    for (let contador_indices = 0; contador_indices < personas.length; contador_indices++) {

        tabla.innerHTML += `
            <tr>
                <td>${personas[contador_indices].nombre}</td>
                <td>${personas[contador_indices].apellido}</td>
                <td>${personas[contador_indices].nie}</td>
                <td>${personas[contador_indices].edad}</td>
            </tr>
        `;
    }
}
