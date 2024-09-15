import express from "express"
import errorHandler from "./middleware/error.handler";
require('dotenv').config();

const app = express();

const port = Number(process.env.PORT || 5000)
app.listen(port, () =>{
    console.log ('App listening to PORT:', port)
})

app.use(errorHandler)
