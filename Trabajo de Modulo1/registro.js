// ARRAY DONDE SE GUARDAN LOS DATOS
let usuarios = [];

if (localStorage.getItem("usuarios")) {
    let usuariosJason = localStorage.getItem("usuarios"); // Obtiene el valor almacenado en localStorage en formato JSON string
    console.log (usuariosJason); // Imprime el JSON string en la consola para verificar su contenido
    usuarios = JSON.parse(usuariosJason);
    console.log (usuarios); // Imprime el array de usuarios después de convertirlo desde JSON string
} 

// FUNCIÓN GUARDAR (CREATE)
function guardar() {
    let user = document.getElementById("register_user").value;
    let password = document.getElementById("register_password").value;


    if (user === "" || password === "") {
        alert("Todos los campos son obligatorios");
    }else if (password.length < 4) {
        alert("La contraseña debe tener al menos 4 caracteres");
    } else {
        // Corrobora que el usuario no exista en el array de usuarios
        //cuenta los usuarios y ve si ya hay uno existente y lo deja o no lo deja pasar 
        for (let contador_users = 0; contador_users < usuarios.length; contador_users++) {
            let usuario = usuarios[contador_users];
            if (user === usuario.user) {
                alert("El usuario ya existe, por favor elija otro nombre de usuario");
                return;
            }
        }

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

}

function limpiar() {
    document.getElementById("register_user").value = "";
    document.getElementById("register_password").value = "";
}