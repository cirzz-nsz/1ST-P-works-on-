let personas = [];

if (localStorage.getItem("personas")) {
    let personasJason = localStorage.getItem("personas");
    personas = JSON.parse(personasJason);
    console.log (personas);
}
let etiquetas = [];
let data = [];

for (let contador_años = 0; contador_años < personas.length; contador_años++) {
    
    let edades = personas[contador_años].edad;
    let existeedad = false;

    for (let etiqueta = 0; etiqueta < etiquetas.length; etiqueta++) {
        if (etiquetas[etiqueta] == edades + " AÑOS") {
            existeedad = true;
        }
        
    let etiqueta = personas[contador_años].edad + " AÑOS";
    etiquetas.push(etiqueta);

    console.log(personas[contador_años].edad)
  

    (let contador_estudiantes = 0; contador_estudiantes < personas.length; contador_estudiantes++) {
    let dato = personas[contador_estudiantes].edad + 1;
    data.push(dato);

    console.log(personas[contador_estudiantes].edad)
}

//entra a el objeto, obtiene el objeto y obtiene la edad y le agrega años para que se vea mejor en la grafica y lo guarda en el array de etiquetas

let grafica = document.getElementById("myChart");
//let etiquetas = ["12 AÑOS", "15 AÑOS", "19 AÑOS", "6 AÑOS", "17 AÑOS"];
let datos =  {
    label: "estudiantes",
    data: [1, 1, 1, 1, 1, 1],
  
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