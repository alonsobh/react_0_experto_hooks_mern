import { heroes } from './data/heroes'
import cualquierNombre from './data/heroes-export-default'

console.log( heroes )

const getHeroesById = ( id ) => heroes.find( (heroe) => heroe.id === id );

console.log( getHeroesById( 2 ) );

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );


console.log( getHeroesByOwner( 'DC' ) );
console.log( getHeroesByOwner( 'Marvel' ) );

console.log( cualquierNombre );