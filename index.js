const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cidades = require("./dados/cidades.json");

app.get("/cidades", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return res.json(cidades);
})

app.listen(port, () => {
    console.log("Servidor rodando");
})