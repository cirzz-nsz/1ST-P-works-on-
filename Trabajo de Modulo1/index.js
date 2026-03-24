// ARRAY DONDE SE GUARDAN LOS DATOS
let usuarios = [];

// FUNCIÓN GUARDAR (CREATE)
function aceptar() {
    if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    } 

    let user = document.getElementById("login_user").value;
    let password = document.getElementById("login_password").value;

    let encontrado = false;

    for (let contador_users = 0; contador_users < usuarios.length; contador_users++) {
        let usuario = usuarios[contador_users];
        if (user === usuario.user && password === usuario.password) {
            alert("Bienvenido " + usuario.user);
            window.location.href = "crud1.html";
            //cambia de pestana a otra 
            encontrado = true;
            return;
            //return es para salir de la función, no se ejecuta nada después de eso
            //es el hachazo de el mister para cortar de una y que no siga nada mas 
        }
    }
    // (!) Significa que La negacion de la negacion da true
        
    if (encontrado == false) {
        alert("Usuario o contraseña incorrectos");
    }
    // Corrobora la informacion y ve que si es velda o no y manda o repite el proceso 
}

