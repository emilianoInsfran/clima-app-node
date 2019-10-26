const axios = require('axios');

const getClima = async(lat ,lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d0ba3806fe64a5fe23e100b832467389`);

    return resp.data.main.temp; 
}

module.exports = {
    getClima
}