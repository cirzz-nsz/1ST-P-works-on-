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

    for (let edad_existente = 0; edad_existente < etiquetas.length; edad_existente++) {
        if (etiquetas[edad_existente] == edad_actual + " AÑOS") {
            existe = true;
        }
    }

    if (!existe) {

        let contador = 0;

        for (let contador_edades = 0; contador_edades < personas.length; contador_edades++) {
            if (personas[contador_edades].edad == edad_actual) {
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
    backgroundColor: [
        'rgba(163,221,203,0.5)',
        'rgba(232,233,161,0.5)',
        'rgba(230,181,102,0.5)',
        'rgba(229,112,126,0.5)',
        'rgba(135,206,250,0.5)',
        'rgba(255,182,193,0.5)'
    ],
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
        'rgba(230,181,102,1)',
        'rgba(229,112,126,1)',
        'rgba(135,206,250,1)',
        'rgba(255,182,193,1)'
    ],
    borderWidth: 1
};

new Chart(grafica, {
    type: "pie",
    data: {
        labels: etiquetas,
        datasets: [
            datos
        ]
    },
      options: {
        responsive: false, 
        maintainAspectRatio: false
    }
});