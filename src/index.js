// Inserte el código aquí

import { obtenerUsuarios } from "../servicio/getUsers";

let contenedor= document.getElementById("contenedor")

function Fecha() {
    contenedor.innerHTML = Date();
}

setInterval(Fecha, 1000)

console.log(obtenerUsuarios());

