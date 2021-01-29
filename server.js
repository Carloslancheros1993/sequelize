const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

app.listen(PORT, () => {
    console.log("corriendo servidor", PORT);
});