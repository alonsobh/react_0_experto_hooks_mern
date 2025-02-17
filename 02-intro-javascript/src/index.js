
const nombre = 'Fernando';
const apellido = 'Herrera';

let nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

nombreCompleto = `
${nombre}
${apellido}
${ 1 + 1}
`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola Mundo';
}

console.log(`Este es un texto: ${ getSaludo()}`);


function getSaludoWithParam(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludoWithParam()}`);

console.log(`Este es un texto: ${ getSaludoWithParam(nombre)}`);