const express = require('express');
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET || 'starwars'

const router = express.Router()
const CidadeController = require('./../Controllers/CidadeController');

function verifyJWT(req, res, next) {
    const token = req.headers['angtoken']
    jwt.verify(token, SECRET, (err, decode) => {
        if (err) return res.status(401).end()
        req.userId = decode.userId
        next()
    })
}

router.post('/cidade', verifyJWT, CidadeController.post);
router.put('/cidade/:id', verifyJWT,CidadeController.put);
router.delete('/cidade/:id', verifyJWT,CidadeController.delete);
router.get('/cidades', verifyJWT, CidadeController.get);
router.get('/cidade/:id', verifyJWT,CidadeController.getById);

module.exports = router;
