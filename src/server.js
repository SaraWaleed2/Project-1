const express = require('express');
const app = express();
require("./db/mongoose");
const routes = require("./routes/index.route");
const morgan = require('morgan');

require('dotenv').config()
const port = process.env.PORT || 3000
// console.log(process.env.DB_URL);

app.use(morgan("dev"))
app.use(express.json())
app.use(routes)


app.all("*", (req, res) => {
    res.status(404).send({ message: "Invalid Route" })
})

app.listen(port, () => {
    console.log(`${port} is working successfully.`);
})