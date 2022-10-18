const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://ang-imovel.herokuapp.com'
}))

const cidades = require("./dados/cidades.json");

app.get("/cidades", (req, res) => {
    res.json(cidades);
})

app.listen(port, () => {
    console.log("Servidor rodando");
})