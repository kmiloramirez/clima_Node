const direccion = {
    alias: 'd',
    desc: 'Direccion de la ciudad par obtener el clima',
    demand: true
}

const argv = require('yargs').options({ direccion }).argv;
module.exports = { argv }