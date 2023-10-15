const { Router } = require('express')
const { createGenero } = require('../controllers/genero')
const router = Router()

router.post('/', createGenero)


module.exports = router
