const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

require('colors');
console.clear();
// const base = 13;





// console.log(argv)


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo,  'Creado'))
    .catch( err => console.log(err));
