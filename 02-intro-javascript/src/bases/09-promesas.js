import { getHeroesById } from "./bases/08-imp-exp-get-heroes-by-id";

const now = Date.now();
console.log(now);
const promesaIncompleta = new Promise( (resolve, reject ) =>{
    setTimeout( () => {
        console.log('2 segundos despues incompleta ' + ( Date.now() - now));
    }, 2000)
});

promesaIncompleta.then(() => {
    console.log(Date.now());
    console.log('Then de la promesa incompleta ' + ( Date.now() - now));
} )


const promesa = new Promise( (resolve, reject ) =>{
    setTimeout( () => {
        console.log('2 segundos despues ' + ( Date.now() - now));
        resolve();
    }, 2000)
});

promesa.then(() => {
    console.log('Then de la promesa ' + ( Date.now() - now));
} )

const promesaError = new Promise( (resolve, reject ) => {
    setTimeout( () => {
        console.log('2 segundos despues error ' + ( Date.now() - now));
        reject( 'Rechazado' );
    }, 2000)
});

promesaError.then(() => {
    console.log('Then de la promesa ' + ( Date.now() - now));
} )
.catch(() => {
    console.log('Catch de la promesa ' + ( Date.now() - now));
} )

const getHeroesByIdAsync = (id) =>{
    return new Promise( (resolve, reject ) => {
        const heroe = getHeroesById( id );
        if (heroe)
        resolve (heroe);
        else
        reject('Heroe no encontrado')
    });
}

const callGetHeroesByIdAsync = (id) => {
   getHeroesByIdAsync(id)
   .then( heroe => console.log('heroe', heroe))
   .catch( err => console.warn(err, `heroe ${id} not found`) ) ;
}

const callGetHeroesById2Async = (id) => {
    getHeroesByIdAsync(id)
    .then( console.log )
    .catch( console.warn ) ;
 }
 callGetHeroesByIdAsync(4);
 callGetHeroesByIdAsync(10);
 callGetHeroesById2Async(4);
 callGetHeroesById2Async(10);