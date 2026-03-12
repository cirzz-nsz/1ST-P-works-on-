function registrar(){

let usuario=document.getElementById("usuario").value;
let clave=document.getElementById("clave").value;

let usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios.push({
usuario:usuario,
clave:clave
});

localStorage.setItem("usuarios",JSON.stringify(usuarios));

alert("Usuario registrado");

window.location="panel.html";

}

function login(){

let usuario=document.getElementById("usuario").value;
let clave=document.getElementById("clave").value;

let usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];

let encontrado=usuarios.find(u=>u.usuario===usuario && u.clave===clave);

if(encontrado){

localStorage.setItem("sesion",usuario);

window.location="panel.html";

}else{

alert("Datos incorrectos");

}

}