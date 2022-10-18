const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

require('./src/Routes/index')(app)

app.use(express.json());

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


app.listen(port, () => {
    console.log("Servidor rodando");
})