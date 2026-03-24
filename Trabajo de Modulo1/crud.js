let personas = [];

// ARRAY DONDE SE GUARDAN LOS DATOS


if (localStorage.getItem("personas")) {
    personas = JSON.parse(localStorage.getItem("personas"));
} 

mostrar();


// FUNCIÓN GUARDAR (CREATE)
function guardar() {
    // document.body.bgColor="black";
    
    // document.body.style.color="white";

    // const titulo = document.querySelector("h2"); // Selecciona el primer h1
    // if (titulo) {
    //    titulo.remove(); // Elimina el elemento del DOM
    // }
    
    let nombre = document.getElementById("html_nombre").value;
    let nie = document.getElementById("html_nie").value;
    let edad = document.getElementById("html_edad").value;
    let apellido = document.getElementById("html_apellido").value;


    if (nombre === "" || edad === "" || apellido === "" || nie === "") {
        alert("Todos los campos son obligatorios");
        } else if (edad < 3 || edad > 20) {
        alert("La edad debe estar entre 3 y 20 años ");
        }  else {

        // OBJETO
        let persona = {
            nombre: nombre,
            edad: edad,
            apellido: apellido,
            nie: nie
        };
        console.log(persona);
        // SECUENCIAL
        personas.push(persona);

        localStorage.setItem("personas", JSON.stringify(personas));

        limpiar();
        mostrar();
    }

    // CONDICIONAL

}

// FUNCIÓN MOSTRAR (READ)
function mostrar() {

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    // ESTRUCTURA REPETITIVA
    for (let contador_indices = 0; contador_indices < personas.length; contador_indices++) {

        tabla.innerHTML += `
            <tr>
                <td>${personas[contador_indices].nombre}</td>
                <td>${personas[contador_indices].apellido}</td>
                <td>${personas[contador_indices].nie}</td>
                <td>${personas[contador_indices].edad}</td>
                <td>
                        <button class="btn btn-info btn-sm" onclick="editar(${contador_indices})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${contador_indices})">Eliminar</button>
                    </td>
            </tr>
        `;
    }
}

// FUNCIÓN EDITAR
function editar(indice) {
    document.getElementById("html_nombre").value = personas[indice].nombre;
    document.getElementById("html_apellido").value = personas[indice].apellido;
    document.getElementById("html_nie").value = personas[indice].nie;
    document.getElementById("html_edad").value = personas[indice].edad;
    document.getElementById("html_indice").value = indice;
}

// FUNCIÓN ACTUALIZAR (UPDATE)
function actualizar() {
    let i = document.getElementById("html_indice").value;
    let nombre = document.getElementById("html_nombre").value;
    let apellido = document.getElementById("html_apellido").value;
    let nie = document.getElementById("html_nie").value;
    let edad = document.getElementById("html_edad").value;

    if (nombre === "" || edad === "" || apellido === "" || nie === "") {
            alert("Todos los campos son obligatorios");
            } else if (edad < 3 || edad > 20) {
        alert("La edad debe estar entre 3 y 20 años ");
    } else {

        personas[i].nombre = nombre;
        personas[i].edad = edad;
        personas[i].apellido = apellido;
        personas[i].nie = nie;

        localStorage.setItem("personas", JSON.stringify(personas));

        limpiar();
        mostrar();
    }
    
}

// FUNCIÓN ELIMINAR (DELETE)
function eliminar(i) {
    let yesorno = confirm("¿Desea eliminar este registro?");
    console.log(yesorno);

    if (yesorno) {
        personas.splice(i, 1);

    localStorage.setItem("personas", JSON.stringify(personas));

        mostrar();
    }

   
}

// LIMPIAR CAMPOS
function limpiar() {


    document.getElementById("html_nombre").value = "";
    document.getElementById("html_apellido").value = "";
    document.getElementById("html_nie").value = "";
    document.getElementById("html_edad").value = "";
    document.getElementById("html_indice").value = "";
}

function generarReporte() {
    if (personas.length === 0) {
        alert("No hay estudiantes para generar el reporte");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nombre,Apellido,NIE,Edad\n";

    personas.forEach(est => {
        csvContent += `${est.nombre},${est.apellido},${est.nie},${est.edad}\n`;
    });

    const encodeUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodeUri);
    link.setAttribute("download", "reporte_estudiantes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}