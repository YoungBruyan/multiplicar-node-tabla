const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    describe: 'Es la base de la tala de multiplicar',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    describe: 'Muestra la tabla en la consola',
                    default: false
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Hasata donde llegara la tabla',
                    default: 10
                })
                .check( (argv, options) =>{
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                } )
                .argv;

module.exports = argv;