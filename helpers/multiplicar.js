const fs = require('fs');
const colors = require('colors');



const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${ 'x'.blue } ${index} ${ '='.blue } ${base * index}\n`;
        }
        
        if(listar){
            console.log("===================".green);
            console.log(`Tabla del: ${colors.green(base)}`);
            console.log("===================".green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
    
        return `Tabla del ${base} creada`;
    } catch (error) {
        throw error;
    }
    
}


module.exports = {
    crearArchivo
}