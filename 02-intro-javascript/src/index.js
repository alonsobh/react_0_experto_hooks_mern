import { heroesExport } from './data/heroes-export'
import cualquierNombre from './data/heroes-export-default'
import heroesEndOfFileDefault, { ownersEndOfFileDefault } from './data/heroes-export-end-of-file-default'
import { heroesExportEndOfFile, ownersExportEndOfFile } from './data/heroes-export-end-of-file'
import heroes, { owners } from './data/heroes'

console.log( heroes )

const getHeroesById = ( id ) => heroes.find( (heroe) => heroe.id === id );

console.log( getHeroesById( 2 ) );

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );


console.log( getHeroesByOwner( 'DC' ) );
console.log( getHeroesByOwner( 'Marvel' ) );

console.log( heroesExport );
console.log( cualquierNombre );
console.log( heroesEndOfFileDefault, ownersEndOfFileDefault );
console.log( heroesExportEndOfFile, ownersExportEndOfFile );
console.log( heroes, owners );