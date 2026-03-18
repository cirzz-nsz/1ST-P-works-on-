// ARRAY DONDE SE GUARDAN LOS DATOS
let usuarios = [];

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

        // OBJETO
        let usuario = {
            user: user,
            password: password
        };
        console.log(usuario);
        // SECUENCIAL
        usuarios.push(usuario);

        localStorage.setItem("usuario", JSON.stringify(usuarios));

        limpiar();

    // CONDICIONAL

}


function limpiar() {
    document.getElementById("register_user").value = "";
    document.getElementById("register_password").value = "";
}

