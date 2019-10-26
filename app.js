
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc:'Dirección de la cioad para obtener el clima',
        deman: true
    }
}).argv;

//lugar.getLugarLatLng( argv.direccion ).then( console.log );//una funcion async siempre devuelve una promesa
/*clima.getClima(  40.750000, -74.000000)
.then( console.log )
.catch( console.log )*/

const getInfo = async(direccion) =>{
    
    try {
        let coords = await lugar.getLugarLatLng(direccion );
        let tem = await clima.getClima (coords.lat, coords.lng)
        return `El clima de ${coords.direccion2} es de ${tem}`
    } catch(e){
        return `No se pudo obtener la temperatura de  ${direccion}`;
    }

          
    //salida
}

getInfo( argv.direccion )//node app -b "New York" en consola
    .then(console.log)
    .catch(console.log)