
// Funciones en JS
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Goku'));

console.log(saludar);
saludar = 30;
console.log(saludar);

const saludarConst = function ( nombre ) {
    return `Hola, ${nombre}`;
}

console.log(saludarConst('Goku'));

const saludarArrow = ( nombre ) => {
    return `Hola, ${nombre}`;
}

console.log(saludarArrow('Vegeta'));

const saludarArrowSimple = ( nombre ) => `Hola, ${nombre}`;

console.log(saludarArrowSimple('Goku'));

const saludarArrowSimpleNoParams = ( ) => `Hola, Mundo`;

console.log(saludarArrowSimpleNoParams());

const getUser = () => {
    return {
        uid : 'ABC213',
        userName : 'El_Papi1502'
    }
};

console.log( getUser() );

const getUserSimple = () => ({
        uid : 'ABC213',
        userName : 'El_Papi1502'
    });

console.log( getUserSimple() );
