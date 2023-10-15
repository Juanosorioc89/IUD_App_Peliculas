const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        Required: (true, 'Serial requerido'),
        unique: (true, 'Ya existe')

    },
    titulo: {
        type: String,
        required: (true, 'Titulo requerido'),
        minleght: 1
    },
    url : {
        type: String

    },
    imagen: {
        type: String

    },
    fechaCreación: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()

    },
    genero : {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    
    director : {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },

    productora : {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },

    tipo : {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    }

})

module.exports = model('Media', MediaSchema )