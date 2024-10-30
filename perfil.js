const prompt = require("prompt-sync")({sigint: true});

let perfil = prompt("ingrese su perfil de usuario: ");



if (perfil === "administrador" || perfil === "ADMINISTRADOR" || perfil === "Administrador" || perfil === "asistente" || perfil === "ASISTENTE" || perfil === "Asistente" || perfil === "invitado" ||  perfil === "INVITADO" ||  perfil === "Invitado" || perfil === "") {


    if (perfil === "administrador" || perfil === "ADMINISTRADOR" || perfil === "Administrador") {
        console.log("Usted tiene todos los privilegios de uso del sistema")
    }
    if (perfil === "asistente" || perfil === "ASISTENTE" || perfil === "Asistente") {
        console.log("“Usted sólo tiene permisos de registrar, modificar y consultar datos");


    }
    if (perfil === "invitado" ||  perfil === "INVITADO" ||  perfil === "Invitado") {
        console.log("Usted sólo tiene permisos de consultar datos");

    }
    
    if (perfil === "") {
        console.log("Debe especificar el perfil del usuario.")

    }



} else {
    console.log("Debe especificar un perfil válido");
}

