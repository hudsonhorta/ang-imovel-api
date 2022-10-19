const express = require('express');
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET || 'starwars'

const router = express.Router()
const BairroController = require('./../Controllers/BairroController');

function verifyJWT(req, res, next) {
    const token = req.headers['angtoken']
    jwt.verify(token, SECRET, (err, decode) => {
        if (err) return res.status(401).end()
        req.userId = decode.userId
        next()
    })
}

router.post('/bairro', verifyJWT, BairroController.post);
router.put('/bairro/:id', verifyJWT, BairroController.put);
router.delete('/bairro/:id', verifyJWT, BairroController.delete);
router.get('/bairros', verifyJWT, BairroController.get);
router.get('/bairro/:id', verifyJWT, BairroController.getById);

module.exports = router;
