require("dotenv/config");
const express = require("express");
const router = require('./routes');

const app = express();


app.use(express.json());

app.use("/api/v1", router)

//Database connection
require('./config').dbConnect;

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
});