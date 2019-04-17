const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'd24eefcce7msh694e16edd2cc8f3p129c02jsnd24b4364fccf' }
    });


    const resp = await instance.get();
    const answer = resp.data.Results
    if (answer.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = answer[0]
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}