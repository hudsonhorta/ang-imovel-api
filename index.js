const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://ang-imovel.herokuapp.com'
}))

//const bairros = require("./dados/bairros.json");

// app.get("/cidades", (req, res) => {
//     res.json(cidades);
// })

// app.get("/bairros", (req, res) => {
//     res.json(bairros[9]);
// })

require('./src/Routes/index.js')(app);

app.listen(port, () => {
    console.log("Servidor rodando");
})