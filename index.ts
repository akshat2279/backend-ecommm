import express,{Request,Response} from "express";
const app = express()
const port = 4000
var cors = require('cors')
require('dotenv').config();
const routs = require('./routes/routs')
const dbconnect = require("./config/db");



app.use(express.json());
app.use(cors())

// database connect
dbconnect();

// routes get loaded
app.use("/api/v1",routs);


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})