/* ============================= */
/* FONDO DE ESTRELLAS */
/* ============================= */

const space = document.getElementById("space");

for(let i=0;i<600;i++){

let star = document.createElement("div");

star.className="star";

let size=Math.random()*3;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*2000+"px";

star.style.animationDuration=(Math.random()*100+50)+"s";

space.appendChild(star);

}

function shootingStar(){

let star=document.createElement("div");

star.className="shooting";

star.style.top=Math.random()*400+"px";
star.style.left=window.innerWidth+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(shootingStar,4000);


/* ============================= */
/* INVENTARIO LIBROS */
/* ============================= */

let libros = [];

// GUARDAR
function guardar() {

let genero = document.getElementById("genero").value;
let nombre = document.getElementById("nombre").value;
let autor = document.getElementById("autor").value;
let fecha = document.getElementById("fecha").value;

if (genero === "" || nombre === "" || autor === "" || fecha=== "") {

alert("Todos los campos son obligatorios");

}else{

let libro = {

genero : genero,
nombre : nombre,
autor : autor,
fecha : fecha

};

libros.push(libro);

limpiar();
mostrar();

}

}


// MOSTRAR
function mostrar(){

let tabla = document.getElementById("tabla");

tabla.innerHTML="";

for(let i=0;i<libros.length;i++){

tabla.innerHTML += `
<tr>

<td>${libros[i].genero}</td>
<td>${libros[i].nombre}</td>
<td>${libros[i].autor}</td>
<td>${libros[i].fecha}</td>

<td>

<button class="btn btn-info btn-sm" onclick="editar(${i})">Editar</button>

<button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>

</td>

</tr>
`;

}

}


// EDITAR
function editar(i){

document.getElementById("genero").value = libros[i].genero;
document.getElementById("nombre").value = libros[i].nombre;
document.getElementById("autor").value = libros[i].autor;
document.getElementById("fecha").value = libros[i].fecha;
document.getElementById("indice").value = i;

}


// ACTUALIZAR
function actualizar(){

let i = document.getElementById("indice").value;

let genero = document.getElementById("genero").value;
let nombre = document.getElementById("nombre").value;
let autor = document.getElementById("autor").value;
let fecha = document.getElementById("fecha").value;

if(genero===""||nombre===""||autor===""||fecha===""){

alert("No se pueden dejar campos vacíos");

}else{

libros[i].genero = genero;
libros[i].nombre = nombre;
libros[i].autor = autor;
libros[i].fecha = fecha;

limpiar();
mostrar();

}

}


// ELIMINAR
function eliminar(i){

if(confirm("¿Desea eliminar el registro?")){

libros.splice(i,1);

mostrar();

}

}


// LIMPIAR
function limpiar(){

document.getElementById("genero").value="";
document.getElementById("nombre").value="";
document.getElementById("autor").value="";
document.getElementById("fecha").value="";
document.getElementById("indice").value="";

}