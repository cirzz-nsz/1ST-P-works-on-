let personas = [];
let etiquetas = [];
let data= [];


if (localStorage.getItem("personas")) {
    let personasJson = localStorage.getItem("personas");
    personas = JSON.parse(personasJson);
    console.log(personas);
}

for (let contador_años = 0; contador_años < personas.length; contador_años++) {

    let edad_actual = personas[contador_años].edad;
    let existe = false;

    // verificar si ya existe esa edad
    for (let j = 0; j < etiquetas.length; j++) {
        if (etiquetas[j] == edad_actual + " AÑOS") {
            existe = true;
        }
    }

    if (!existe) {

        let contador = 0;

        // contar cuántas veces se repite esa edad
        for (let i = 0; i < personas.length; i++) {
            if (personas[i].edad == edad_actual) {
                contador++;
            }
        }

        etiquetas.push(edad_actual + " AÑOS");
        data.push(contador);

        console.log(edad_actual, "se repite:", contador);
    }
}

let grafica = document.getElementById("myChart");

let datos = {
    label: "estudiantes",
    data: data,
};

new Chart(grafica, {
    type: "pie",
    data: {
        labels: etiquetas,
        datasets: [
            datos
        ]
    }
});