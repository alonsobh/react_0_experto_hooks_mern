
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.92333321
    }
};

console.log( persona );
console.log( persona.nombre );
console.log( { persona:persona } );
console.log( { persona } );
console.table( persona );

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log( persona )
console.log( persona2 )

persona.nombre = 'Tony'

const persona3 = {...persona};
persona3.nombre = 'Peter'

console.log( persona )
console.log( persona3 )
