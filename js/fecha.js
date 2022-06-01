
let d = new Date();
// pa usar la hora con 2 digitos se usa el ternario para saber si el numero del digito es menor ke 2
let hours = d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours();
let minutes = d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes();
let seconds = d.getSeconds().toString().length < 2 ? "0" + d.getSeconds() : d.getSeconds();

let dia = d.getDate();
let mes = d.getMonth();
let año = d.getFullYear();

let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let mesesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// se concatenan las variables
let horaFinal = `${hours}:${minutes}:${seconds}`;
let fecha = `${diasSemana[d.getDay()]}, ${d.getDate()} de ${mesesAño[d.getMonth()]} de ${d.getFullYear()}`

document.getElementById('fecha').innerHTML =
`<div>
    <h1>Fecha: ${fecha}</h1>
    <h1>Hora: ${horaFinal}</h1>"
</div>
`


