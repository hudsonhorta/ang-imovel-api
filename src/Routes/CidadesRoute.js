const express = require('express');

const router = express.Router()
const CidadeController = require('./../Controllers/CidadeController');

router.post('/cidade', CidadeController.post);
router.put('/cidade/:id', CidadeController.put);
router.delete('/cidade/:id', CidadeController.delete);
router.get('/cidades', CidadeController.get);
router.get('/cidade/:id', CidadeController.getById);

module.exports = router;
