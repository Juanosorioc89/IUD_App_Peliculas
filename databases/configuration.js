const mongoose = require('mongoose')

mongoConn = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
        })
        console.log('Conexión OK')
    } catch (e) {
        console.log('error de conexión', e)
        throw new error ('error de conexión')
    }
}

module.exports = { mongoConn }
