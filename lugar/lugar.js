const axios = require('axios');

const getLugarLatLng = async( direccion )=>{
    //console.log(direccion);

    const encodeUrl = encodeURI( direccion );//hace seguro al apasar el parametro a la url por ejemplo los espacios entre letras
    
    //console.log(encodeUrl);
    
    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,    
        headers: {'x-rapidapi-key': '6ae176dbcemsha09f9944cabeeb5p1b06d9jsnd8ac1f57b831'}
      });
    
      instance.get().then(resp => {
          console.log(resp.data.Results);
      }).catch(err=>{
            console.log('ERROR', err);
      })

      const resp = await instance.get();

      if(resp.data.Results.length == 0){
          throw new Error(`No hay resultados para ${ direccion }`);
      }

      const data = resp.data.Results[0];
      const direccion2 = data.name;
      const lat = data.lat;
      const lng = data.lon;

      return {
          direccion2,
          lat,
          lng
      }

      
};


module.exports = {
    getLugarLatLng
}

