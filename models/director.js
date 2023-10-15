const { Schema, model } = require('mongoose')

const DirectorSchema = Schema({
    nombre: {
        type: String,
        required: (true, 'Nombre género requerido'),
        minleght: 1
        

    },
    estado: {
        type: Boolean,
        default: true,
        required: true

    },
    fechaCreación: {
        type: Date,
        default: new Date


    },
    fechaActualizacion: {
        type: Date,
        default: new Date

    }

})

module.exports = model('Director',DirectorSchema )