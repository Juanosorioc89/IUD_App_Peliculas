const { Router } = require('express')
const { createGenero, getGeneros } = require('../controllers/genero')

const router = Router()

router.post('/', createGenero)

router.get('/', getGeneros )


module.exports = router
