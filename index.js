const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
const SECRET = process.env.SECRET || 'starwars'

app.use(cors({
    origin: 'https://ang-imovel.herokuapp.com'
}))


// rotas

const cidades = require('./src/Routes/CidadesRoute')
const bairros = require('./src/Routes/BairrosRoute')

app.use('/', cidades)
app.use('/', bairros)

app.post('/token', (req, res) => {
    if (req.body.user === 'hudson' && req.body.password === '123456') {
        const token = jwt.sign({
                userId: 1
            },
            SECRET, {
                expiresIn: 300
            })
        return res.json({
            auth: true,
            token
        })
    }
    res.status(401).end()
})

app.post('/logout', function (req, res) {
    res.end()
})

app.listen(port, () => {
    console.log("Servidor rodando");
})