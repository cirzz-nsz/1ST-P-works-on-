// ARRAY DONDE SE GUARDAN LOS DATOS
let usuarios = [];

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
} 

// FUNCIÓN GUARDAR (CREATE)
function guardar() {
    // document.body.bgColor="black";
    
    // document.body.style.color="white";

    // const titulo = document.querySelector("h2"); // Selecciona el primer h1
    // if (titulo) {
    //    titulo.remove(); // Elimina el elemento del DOM
    // }
    

    let user = document.getElementById("register_user").value;
    let password = document.getElementById("register_password").value;

    if (user === "" || password === "") {
            alert("Todos los campos son obligatorios");
            } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        }  else {

        // OBJETO
        let usuario = {
            user: user,
            password: password
        };
        console.log(usuario);
        // SECUENCIAL
        usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        limpiar();

        window.location.href = "index.html";
    }
    // CONDICIONAL

}


function limpiar() {
    document.getElementById("register_user").value = "";
    document.getElementById("register_password").value = "";
}