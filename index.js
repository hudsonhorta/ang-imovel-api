const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://ang-imovel.herokuapp.com'
}))

// rotas

const cidades = require('./src/Routes/CidadesRoute')
const bairros = require('./src/Routes/BairrosRoute')

app.use('/', cidades)
app.use('/', bairros)

app.listen(port, () => {
    console.log("Servidor rodando");
})