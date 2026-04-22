import { request } from "../../shared/js/api";
import { validarCorreo, mostrarError, limpiarError } from "../../shared/js/utils";
import { saveUser } from "../../shared/js/storage";

const form = document.getElementById("form")
const email = document.getElementById("email")
const username = document.getElementById("username")
const error = document.getElementById("passwordHelp")
const createButton = document.getElementById("createButton")

form.addEventListener("submit", async function (e) {
    e.preventDefault()
    limpiarError()

    const correo = email.value.trim()
    const contraseña = password.value.trim()

    if(!validarCorreo(correo)){
        mostrarError(error, "correo inválido")
        return
    }

    if(clave.length < 6){
        mostrarError(error, "La contraseña debe tener mínimo 6 caracteres")
    }

    try{}
    catch{}
    finally{}
})