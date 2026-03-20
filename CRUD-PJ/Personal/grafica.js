let grafica = document.getElementById("myChart");
let etiquetas = ["3 AÑOS", "6 AÑOS", "7 AÑOS"];
let datos =  {
    label: "estudiantes",
    data: [10, 15, 20],
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});