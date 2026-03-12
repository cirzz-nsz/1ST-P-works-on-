let libros=JSON.parse(localStorage.getItem("libros")) || [];

mostrar();

function guardar(){

let genero=document.getElementById("genero").value;
let nombre=document.getElementById("nombre").value;
let autor=document.getElementById("autor").value;
let fecha=document.getElementById("fecha").value;

let libro={genero,nombre,autor,fecha};

libros.push(libro);

localStorage.setItem("libros",JSON.stringify(libros));

mostrar();

}

function mostrar(){

let tabla=document.getElementById("tabla");

tabla.innerHTML="";

for(let l of libros){

tabla.innerHTML+=`

<tr>

<td>${l.genero}</td>
<td>${l.nombre}</td>
<td>${l.autor}</td>
<td>${l.fecha}</td>

</tr>

`;

}

}