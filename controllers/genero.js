const Genero = require('../models/genero')
const { request, response } = require ('express')

const createGenero = async (req = request, res = response) => {
    
    const { nombre, descripcion } = req.body

    try{ 
        const generoDB = await Genero.findOne({ nombre })
    if(generoDB){
        return res.status(400).json({msj: 'Ya existe el nombre'})
    }

    const datos = {
        nombre, 
        descripcion
    }

    const genero = new Genero(datos)

    await genero.save()

    return res.status(201).json(genero)


    } catch(error){
        console.log(error)
        return res.status(500).json({msj: error})

    }
   
}


const getGeneros = async ( req = request, res = response) => {
    try{
        const { estado } = req.query

        const generos  = await Genero.find({ estado })

        return res.json(generos)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})   

    }
}

module.exports = {
    createGenero, getGeneros
} 
