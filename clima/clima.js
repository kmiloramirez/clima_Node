const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=384674b2d86b1b4587b9afb97403f3c6&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}