let libros=JSON.parse(localStorage.getItem("libros")) || [];

let conteo={};

for(let libro of libros){

conteo[libro.genero]=(conteo[libro.genero]||0)+1;

}

new Chart(document.getElementById("grafico"),{

type:"pie",

data:{
labels:Object.keys(conteo),
datasets:[{
data:Object.values(conteo),
backgroundColor:["red","blue","green","orange"]
}]
}

});