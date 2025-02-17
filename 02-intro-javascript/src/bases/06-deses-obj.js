
// Desestructuracion
// Asignacion Desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

const {nombre:nombre2, edad, clave, } = persona

console.log( nombre2 );
console.log( edad );
console.log( clave );

const retornaPersona = (usuario) => {
    console.log(usuario.nombre, usuario.edad);
}

retornaPersona(persona);

const retornaPersonaDesestructurado = ({ nombre, edad, rango='Capitan', rango2='Capitan' }) => {
    console.log(nombre, edad, rango, rango2);
}

retornaPersonaDesestructurado(persona);

const retornaPersonaNueva = ({ clave, edad }) => {
    return {nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        }
    };
}

const { nombreClave, anios } = retornaPersonaNueva(persona);
console.log( nombreClave, anios );

const { latlng } = retornaPersonaNueva(persona);
console.log( latlng );


const { latlng:{ lat,lng } } = retornaPersonaNueva(persona);
console.log( lat,lng );