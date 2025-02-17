const personajes = [ 'Goku','Vegeta','Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1] = personajes;
console.log( p1 );
const [,vegeta, p3] = personajes;
console.log( vegeta, p3 );
const [,, trunks] = personajes;
console.log( trunks );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const arr = retornaArreglo();

console.log( arr );

const [ letras, numero ]= retornaArreglo();
console.log( letras, numero );

const usarState = ( valor ) => {
    return [valor, () => {console.log('Hola Mundo') } ];
}

const state = usarState( 'Goku' );
console.log( state );

const [nombreFunc, setNombre] = usarState( 'Goku' );
console.log( nombreFunc );
console.log( setNombre() );
