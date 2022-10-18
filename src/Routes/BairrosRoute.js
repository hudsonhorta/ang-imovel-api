const express = require('express');

const router = express.Router()
const BairroController = require('./../Controllers/BairroController');

router.post('/bairro', BairroController.post);
router.put('/bairro/:id', BairroController.put);
router.delete('/bairro/:id', BairroController.delete);
router.get('/bairros', BairroController.get);
router.get('/bairro/:id', BairroController.getById);

module.exports = router;
